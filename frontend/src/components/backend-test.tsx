"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BackendTest() {
  const [status, setStatus] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testBackend = async () => {
    setLoading(true)
    setStatus("Testing...")
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
      if (response.ok) {
        const data = await response.json()
        setStatus(`✅ Backend is working! ${data.message}`)
      } else {
        setStatus(`❌ Backend error: ${response.status}`)
      }
    } catch (error) {
      setStatus(`❌ Connection failed: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Backend Connection Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={testBackend} 
          disabled={loading}
          className="w-full"
        >
          {loading ? "Testing..." : "Test Backend Connection"}
        </Button>
        
        {status && (
          <div className="text-sm p-3 bg-gray-100 rounded">
            {status}
          </div>
        )}
        
        <div className="text-xs text-gray-500">
          Backend URL: {process.env.NEXT_PUBLIC_API_URL}
        </div>
      </CardContent>
    </Card>
  )
}


