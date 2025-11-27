import React, { useEffect, useRef, useState } from 'react'

type Props = { onSearch?: (q: string) => void }

export default function SearchBar({ onSearch }: Props) {
  const [q, setQ] = useState('')
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => onSearch && onSearch(q.trim()), 300)
    return () => { if (timer.current) window.clearTimeout(timer.current) }
  }, [q, onSearch])

  return (
    <div className="search-box">
      <input
        className="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar..."
        aria-label="buscar"
      />
      <button className="icon-btn" onClick={() => onSearch && onSearch(q.trim())} aria-label="buscar">
        🔍
      </button>
    </div>
  )
}
