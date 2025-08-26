import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science, MIT",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "StudySync helped me find study partners who matched my goals and schedule. My GPA improved by 0.7 this semester!",
  },
  {
    name: "Marcus Johnson",
    role: "Pre-Med, Stanford",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "The AI matching is incredibly accurate. I've made lifelong study buddies and friends through StudySync.",
  },
  {
    name: "Emma Rodriguez",
    role: "Business, Harvard",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "StudySync eliminated my study procrastination. Having partners keeps me accountable and motivated.",
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Students Love StudySync</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Real stories from students who transformed their study experience
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
