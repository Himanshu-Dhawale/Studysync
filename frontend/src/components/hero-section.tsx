import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your Perfect <span className="text-purple-600">Study Partner</span> in Seconds
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI-powered matching connects you with peers who share your academic goals, interests, and schedule.
                Collaborate smarter—no more solo struggles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                Get Started Free →
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">⭐ Study sessions at 3 PM</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Students studying together"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
