"use client"

import { useUser, SignOutButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UserMenu() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-4">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!user) {
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome, {user.firstName || user.emailAddresses[0]?.emailAddress}!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}
          </p>
          {user.firstName && (
            <p className="text-sm text-gray-600">
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
          )}
        </div>
        <SignOutButton>
          <Button variant="outline" className="w-full">
            Sign out
          </Button>
        </SignOutButton>
      </CardContent>
    </Card>
  )
}
