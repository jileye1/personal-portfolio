import { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

export const usePageTransition = () => {
  const [isExiting, setIsExiting] = useState(false)
  const [isEntering, setIsEntering] = useState(false)

  const navigateWithTransition = (to) => {
    setIsExiting(true)
    
    // Wait for exit animation to complete, then navigate
    setTimeout(() => {
      navigate(to)
    }, 200) // Match your CSS animation duration
  }

  useEffect(() => {
    // Trigger enter animation on mount
    const timer = setTimeout(() => {
      setIsEntering(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return {
    isExiting,
    isEntering,
    navigateWithTransition
  }
}