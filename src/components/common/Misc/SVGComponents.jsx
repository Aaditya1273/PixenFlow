import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Logo = () => {
  const svgRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const svgEl = svgRef.current
    const logoEl = logoRef.current
    if (!svgEl || !logoEl) return

    gsap.set(logoEl, { transformOrigin: 'center center' })

    const handleEnter = () =>
      gsap.to(logoEl, { scale: 1.05, duration: 0.8, ease: 'elastic.out(1, 0.3)' })

    const handleLeave = () =>
      gsap.to(logoEl, { scale: 1, duration: 0.8, ease: 'elastic.out(2, 1)' })

    svgEl.addEventListener('mouseenter', handleEnter)
    svgEl.addEventListener('mouseleave', handleLeave)

    return () => {
      svgEl.removeEventListener('mouseenter', handleEnter)
      svgEl.removeEventListener('mouseleave', handleLeave)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <svg
      ref={svgRef}
      width="40"
      height="40"
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <g ref={logoRef}>
        <path d="M57.5 0L106.066 28.75V86.25L57.5 115L8.93398 86.25V28.75L57.5 0Z" fill="#000000"/>
        <path d="M57.5 11.5L94.566 34.75V81.25L57.5 104.5L20.434 81.25V34.75L57.5 11.5Z" stroke="#FF6B00" strokeWidth="3"/>
        <path d="M57.5 23L83.066 40.75V76.25L57.5 94L31.934 76.25V40.75L57.5 23Z" stroke="#FF6B00" strokeWidth="3"/>
        <path d="M57.5 34.5L71.566 46.75V71.25L57.5 83.5L43.434 71.25V46.75L57.5 34.5Z" stroke="#FF6B00" strokeWidth="3"/>
        <path d="M57.5 46L59.566 52.75V66.25L57.5 73L48.434 66.25V52.75L57.5 46Z" stroke="#FF6B00" strokeWidth="3"/>
      </g>
      <text x="115" y="40" fill="#FFFFFF" fontSize="24" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="start">Pixen Flow</text>
    </svg>
  )
}
