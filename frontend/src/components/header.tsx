import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-gray-900">StudySync</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">
            How it Works
          </a>
          <a href="#reviews" className="text-gray-600 hover:text-gray-900">
            Reviews
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
