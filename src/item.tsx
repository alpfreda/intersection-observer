import React, { useEffect, useRef } from 'react'

function useIntersectionObserver(options: IntersectionObserverInit): React.RefObject<HTMLImageElement> {
  const targetRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
          entry.target.src = entry.target.getAttribute('data-src') ?? ''
          entry.target.style.opacity = '1'
        } else if (entry.target instanceof HTMLImageElement) {
          if (entry.target.src.length === 0) {
            entry.target.src = ''
          }
          entry.target.style.opacity = '0'
        }
      })
    }, options)

    if (targetRef?.current !== null) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef?.current !== null) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [options])

  return targetRef
}

interface ItemProps {
  src: string
}

const options: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: '0px',
}

const Item: React.FC<ItemProps> = ({ src }): JSX.Element => {
  const targetRef = useIntersectionObserver(options)

  return (
    <img
      key={src}
      className='section w-content h-80 ease-in duration-300 shadow-lg my-auto mb-3 rounded-xl'
      data-src={src}
      ref={targetRef}
    />
  )
}

export default Item
