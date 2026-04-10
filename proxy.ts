import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// All public (non-protected) routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/contact',
  '/how-it-works',
  '/pricing',
  '/physicians',
  '/protocols',
  '/protocols/(.*)',
  '/intake',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/privacy',
  '/terms',
  '/medical-consent',
  '/hipaa',
  '/api/contact',
])

export default clerkMiddleware(async (auth, req) => {
  // Only protect non-public routes
  if (!isPublicRoute(req)) {
    await auth.protect({
      // Always redirect to our local sign-in page
      unauthenticatedUrl: new URL('/sign-in', req.url).toString(),
    })
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
