"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function OnboardingCheck() {
  const router = useRouter()

  useEffect(() => {
    // Check if user has completed onboarding
    const onboardingCompleted = localStorage.getItem('onboardingCompleted')
    
    if (!onboardingCompleted) {
      // User hasn't completed onboarding, redirect them
      router.push('/onboarding')
    }
  }, [router])

  return null
}
