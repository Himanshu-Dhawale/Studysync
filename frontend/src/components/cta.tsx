import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Study Experience?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of students who&apos;ve already discovered the power of collaborative learning with StudySync.
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
          Create My Study Profile
        </Button>
      </div>
    </section>
  )
}
