'use client'

import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

type Heading = { id: string; text: string; level: number; element: Element }

interface Props {
  offsetTop?: number
}

export function TableOfContents({ offsetTop = 0 }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeHeading, setActiveHeading] = useState<Heading | null>(null)
  const visibleHeadings = useRef<Heading[]>([])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
      .filter(element => element.id)
      .map(element => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
        element,
      }))

    setHeadings(elements)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const heading = headings.find(({ element }) => element === entry.target)

          if (!heading) return

          if (entry.isIntersecting) {
            visibleHeadings.current = [...visibleHeadings.current, heading]
          } else {
            visibleHeadings.current = visibleHeadings.current.filter(h => h !== heading)
          }

          if (visibleHeadings.current.length > 0) {
            setActiveHeading(
              visibleHeadings.current.reduce((a, b) =>
                a.element.getBoundingClientRect().top < b.element.getBoundingClientRect().top
                  ? a
                  : b
              )
            )
          }
        })
      },
      { rootMargin: `-${offsetTop}px 0% 0% 0%`, threshold: 0 }
    )

    headings.forEach(({ element }) => observer.observe(element))

    return () => observer.disconnect()
  }, [headings, offsetTop])

  return (
    <div className="not-prose hidden xl:block">
      <nav className="sticky top-24 w-full">
        <div className="font-docs-heading mb-3 text-sm">On this page</div>
        <ul>
          {headings.map((heading, index) => (
            <li key={index} className="m-0 p-0">
              <a
                className={clsx(
                  'font-docs-sans text-docs-foreground block py-1 text-sm !font-light leading-normal transition-opacity before:hidden',
                  heading === activeHeading
                    ? 'opacity-100'
                    : 'opacity-60 hover:!opacity-100 dark:opacity-70'
                )}
                style={{
                  marginLeft: `${heading.level - 2}em`,
                }}
                href={`#${heading.id}`}
                onClick={e => {
                  e.preventDefault()
                  const element = document.querySelector(`#${heading.id}`)

                  window.scrollTo({
                    top: (element?.getBoundingClientRect().top ?? 0) + window.scrollY - offsetTop,
                    left: (element?.getBoundingClientRect().left ?? 0) + window.scrollY - offsetTop,
                    behavior: 'smooth',
                  })
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
