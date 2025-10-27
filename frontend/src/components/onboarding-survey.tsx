"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  GraduationCap,
  HelpCircle,
  Calculator,
  FlaskRoundIcon as Flask,
  Leaf,
  Atom,
  Code,
  BookOpen,
  Trophy,
  Target,
  Lightbulb,
  Users,
  Sun,
  Sunset,
  Moon,
  Star,
  Clock,
  Timer,
  Hourglass,
  Calendar,
  MessageCircle,
  VolumeX,
  FileQuestionIcon as QuestionIcon,
  GitBranch,
  Check,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface SurveyData {
  subjects: string[]
  academicGoal: string
  studyTime: string
  sessionLength: string
  studyStyle: string
}

export default function OnboardingSurvey() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [surveyData, setSurveyData] = useState<SurveyData>({
    subjects: [],
    academicGoal: "",
    studyTime: "",
    sessionLength: "",
    studyStyle: "",
  })

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const subjects = [
    { id: "mathematics", name: "Mathematics", icon: Calculator },
    { id: "chemistry", name: "Chemistry", icon: Flask },
    { id: "biology", name: "Biology", icon: Leaf },
    { id: "physics", name: "Physics", icon: Atom },
    { id: "computer-science", name: "Computer Science", icon: Code },
    { id: "literature", name: "Literature", icon: BookOpen },
  ]

  const academicGoals = [
    { id: "improve-grades", name: "Improve grades and academic performance", icon: Trophy },
    { id: "exam-prep", name: "Prepare for exams and tests", icon: Target },
    { id: "understand-concepts", name: "Understand difficult concepts better", icon: Lightbulb },
    { id: "build-habits", name: "Build study habits and accountability", icon: Users },
  ]

  const studyTimes = [
    { id: "morning", name: "Morning (6AM-12PM)", icon: Sun },
    { id: "afternoon", name: "Afternoon (12PM-6PM)", icon: Sunset },
    { id: "evening", name: "Evening (6PM-10PM)", icon: Moon },
    { id: "late-night", name: "Late Night (10PM+)", icon: Star },
  ]

  const sessionLengths = [
    { id: "30-60", name: "30-60 minutes (Quick focused sessions)", icon: Clock },
    { id: "1-2", name: "1-2 hours (Standard sessions)", icon: Timer },
    { id: "2-4", name: "2-4 hours (Deep work sessions)", icon: Hourglass },
    { id: "4+", name: "4+ hours (Marathon sessions)", icon: Calendar },
  ]

  const studyStyles = [
    { id: "discussion", name: "Discussion & Explanation", icon: MessageCircle },
    { id: "silent", name: "Silent Co-working", icon: VolumeX },
    { id: "qa", name: "Q&A Practice", icon: QuestionIcon },
    { id: "collaboration", name: "Project Collaboration", icon: GitBranch },
  ]

  const handleSubjectToggle = (subjectId: string) => {
    setSurveyData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subjectId)
        ? prev.subjects.filter((id) => id !== subjectId)
        : [...prev.subjects, subjectId],
    }))
  }

  // Validation functions for each step
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return surveyData.subjects.length > 0
      case 2:
        return surveyData.academicGoal !== ""
      case 3:
        return surveyData.studyTime !== ""
      case 4:
        return surveyData.sessionLength !== ""
      case 5:
        return surveyData.studyStyle !== ""
      default:
        return false
    }
  }

  const handleNext = async () => {
    if (currentStep < totalSteps && isStepValid()) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = async () => {
    if (!isStepValid()) return
    
    // Show loading screen
    setIsProcessing(true)
    
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    
    // Handle survey completion
    console.log("Survey completed:", surveyData)
    
    // Save onboarding completion status
    try {
      // You can save this to your backend or localStorage
      localStorage.setItem('onboardingCompleted', 'true')
      localStorage.setItem('onboardingData', JSON.stringify(surveyData))
    } catch (error) {
      console.error('Error saving onboarding data:', error)
    }
    
    setIsProcessing(false)
    
    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white border-b z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StudySync</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <span className="text-gray-600">Dashboard</span>
              <span className="text-gray-600">Matches</span>
              <span className="text-gray-600">Schedule</span>
            </nav>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">👤</span>
            </div>
          </div>
        </div>

        <Card className="w-full max-w-md shadow-xl mt-20">
          <CardContent className="p-12 text-center space-y-8">
            <div className="w-16 h-16 mx-auto">
              <Loader2 className="w-16 h-16 text-purple-600 animate-spin" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Creating Your AI Study Profile</h2>
              <p className="text-gray-600">
                Our AI is analyzing your preferences to find the perfect study partners...
              </p>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Processing study preferences</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Generating compatibility tags</span>
              </div>
              <div className="flex items-center space-x-3">
                <Loader2 className="w-5 h-5 text-purple-600 animate-spin" />
                <span className="text-gray-700">Finding potential matches</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          size="sm"
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 rounded-full w-12 h-12 p-0"
        >
          <HelpCircle className="w-5 h-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">StudySync</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-gray-600">Dashboard</span>
            <span className="text-gray-600">Matches</span>
            <span className="text-gray-600">Schedule</span>
          </nav>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="text-gray-600">👤</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 pt-16">
        <Card className="w-full max-w-4xl shadow-xl">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Quick Setup Survey</h1>
              </div>
              <p className="text-gray-600">Help us find your perfect study partners in just 30 seconds</p>
              <Progress value={progress} className="w-full max-w-md mx-auto" />
            </div>

            {/* Step 1: Subjects */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">What subjects are you currently studying?</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {subjects.map((subject) => {
                    const Icon = subject.icon
                    const isSelected = surveyData.subjects.includes(subject.id)
                    return (
                      <button
                        key={subject.id}
                        onClick={() => handleSubjectToggle(subject.id)}
                        className={`p-6 rounded-lg border-2 transition-all ${
                          isSelected
                            ? "border-purple-600 bg-purple-600 text-white"
                            : "border-gray-200 bg-white hover:border-purple-300"
                        }`}
                      >
                        <Icon className={`w-8 h-8 mx-auto mb-3 ${isSelected ? "text-white" : "text-gray-600"}`} />
                        <span className="font-medium">{subject.name}</span>
                      </button>
                    )
                  })}
                </div>
                {surveyData.subjects.length === 0 && (
                  <p className="text-red-500 text-sm text-center">Please select at least one subject to continue</p>
                )}
              </div>
            )}

            {/* Step 2: Academic Goal */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">What&apos;s your primary academic goal?</h2>
                <div className="space-y-4">
                  {academicGoals.map((goal) => {
                    const Icon = goal.icon
                    const isSelected = surveyData.academicGoal === goal.id
                    return (
                      <button
                        key={goal.id}
                        onClick={() => setSurveyData((prev) => ({ ...prev, academicGoal: goal.id }))}
                        className={`w-full p-6 rounded-lg border-2 transition-all text-left flex items-center space-x-4 ${
                          isSelected
                            ? "border-purple-600 bg-purple-600 text-white"
                            : "border-gray-200 bg-white hover:border-purple-300"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isSelected ? "text-white" : "text-gray-600"}`} />
                        <span className="font-medium">{goal.name}</span>
                      </button>
                    )
                  })}
                </div>
                {!surveyData.academicGoal && (
                  <p className="text-red-500 text-sm text-center">Please select an academic goal to continue</p>
                )}
              </div>
            )}

            {/* Step 3: Study Time */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">When do you prefer to study?</h2>
                <div className="grid grid-cols-2 gap-4">
                  {studyTimes.map((time) => {
                    const Icon = time.icon
                    const isSelected = surveyData.studyTime === time.id
                    return (
                      <button
                        key={time.id}
                        onClick={() => setSurveyData((prev) => ({ ...prev, studyTime: time.id }))}
                        className={`p-8 rounded-lg border-2 transition-all ${
                          isSelected
                            ? "border-purple-600 bg-purple-600 text-white"
                            : "border-gray-200 bg-white hover:border-purple-300"
                        }`}
                      >
                        <Icon className={`w-8 h-8 mx-auto mb-3 ${isSelected ? "text-white" : "text-gray-600"}`} />
                        <span className="font-medium">{time.name}</span>
                      </button>
                    )
                  })}
                </div>
                {!surveyData.studyTime && (
                  <p className="text-red-500 text-sm text-center">Please select a study time preference to continue</p>
                )}
              </div>
            )}

            {/* Step 4: Session Length */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">How long are your ideal study sessions?</h2>
                <div className="space-y-4">
                  {sessionLengths.map((length) => {
                    const Icon = length.icon
                    const isSelected = surveyData.sessionLength === length.id
                    return (
                      <button
                        key={length.id}
                        onClick={() => setSurveyData((prev) => ({ ...prev, sessionLength: length.id }))}
                        className={`w-full p-6 rounded-lg border-2 transition-all text-left flex items-center space-x-4 ${
                          isSelected
                            ? "border-purple-600 bg-purple-600 text-white"
                            : "border-gray-200 bg-white hover:border-purple-300"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isSelected ? "text-white" : "text-gray-600"}`} />
                        <span className="font-medium">{length.name}</span>
                      </button>
                    )
                  })}
                </div>
                {!surveyData.sessionLength && (
                  <p className="text-red-500 text-sm text-center">Please select a session length to continue</p>
                )}
              </div>
            )}

            {/* Step 5: Study Style */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">What&apos;s your preferred study style?</h2>
                <div className="grid grid-cols-2 gap-4">
                  {studyStyles.map((style) => {
                    const Icon = style.icon
                    const isSelected = surveyData.studyStyle === style.id
                    return (
                      <button
                        key={style.id}
                        onClick={() => setSurveyData((prev) => ({ ...prev, studyStyle: style.id }))}
                        className={`p-8 rounded-lg border-2 transition-all ${
                          isSelected
                            ? "border-purple-600 bg-purple-600 text-white"
                            : "border-gray-200 bg-white hover:border-purple-300"
                        }`}
                      >
                        <Icon className={`w-8 h-8 mx-auto mb-3 ${isSelected ? "text-white" : "text-gray-600"}`} />
                        <span className="font-medium">{style.name}</span>
                      </button>
                    )
                  })}
                </div>
                {!surveyData.studyStyle && (
                  <p className="text-red-500 text-sm text-center">Please select a study style to continue</p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              {currentStep === totalSteps ? (
                <Button
                  onClick={handleComplete}
                  disabled={!isStepValid()}
                  className="bg-purple-600 hover:bg-purple-700 flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <span>Complete Setup</span>
                  <Check className="w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleNext} 
                  disabled={!isStepValid()}
                  className="bg-purple-600 hover:bg-purple-700 flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help Button */}
      <Button size="sm" className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 rounded-full w-12 h-12 p-0">
        <HelpCircle className="w-5 h-5" />
      </Button>
    </div>
  )
}