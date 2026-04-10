// Auth pages (sign-in, sign-up) get no Navbar or Footer
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
