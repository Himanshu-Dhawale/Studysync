import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const { userId } = await auth()
  
  if (!userId) {
    // User is not logged in, show the landing page
    const HomePage = (await import('../components/home-page')).default
    return <HomePage />
  }
  
  // User is logged in, redirect to dashboard
  // The dashboard will then check if they need onboarding
  redirect('/dashboard')
}
