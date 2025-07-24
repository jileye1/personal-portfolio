import React from 'react'
import { Link } from 'gatsby'

const TransitionLink = ({ to, children, className, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault()
    
    // Add exit class to body or main container
    document.body.classList.add('page-exiting')
    
    // Wait for animation, then navigate
    setTimeout(() => {
      window.location.href = to // Force a navigation
    }, 600)
  }

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}

export default TransitionLink