import clsx from 'clsx'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { Overlay } from './Overlay'

export function Prose({ children, className }) {
  const [showOverlay, setShowOverlay] = useState(false)
  const element = useRef()

  useEffect(() => {
    if (localStorage.getItem('CF-EMAIL-SUBMITTED')) return

    if (element.current) {
      document.addEventListener('scroll', () => {
        if (window.scrollY > 700) setShowOverlay(true)
      })
    }
  }, [])

  return (
    <div ref={element}>
      <div className={clsx(className, 'prose dark:prose-invert')}>
        {children}
      </div>
      {showOverlay && <Overlay />}
    </div>
  )
}
