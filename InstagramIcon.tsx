import React from 'react'

export default function InstagramIcon({ size = 44 }: { size?: number }) {
  return (
    <a className="instagram-link instagram-icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#D3AD7F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
      </svg>
    </a>
  )
}
