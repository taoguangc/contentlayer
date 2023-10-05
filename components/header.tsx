import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="flex justify-between">
      <ModeToggle />
      <nav className="ml-auto text-sm font-medium space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/template">Template</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
