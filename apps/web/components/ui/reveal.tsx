'use client'

import { useState } from 'react'

import clsx from 'clsx'

import { Button } from './button'

function Reveal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative my-5 md:my-6">
      <Button
        className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2"
        size="small"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {isOpen ? 'Show less' : 'Show more'}
      </Button>

      {!isOpen && (
        <div className="pointer-events-none absolute inset-x-0 bottom-[1px] top-0 z-10 bg-gradient-to-b from-transparent to-contrast-100" />
      )}

      <div
        className={clsx(
          'border-b border-dashed border-foreground bg-contrast-100',
          isOpen ? 'max-h-[70vh] overflow-auto pb-10' : 'max-h-40 overflow-hidden'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { Reveal }