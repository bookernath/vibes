'use client'

import React, { ReactNode, Ref, forwardRef } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'

import Chevron from '@/vibes/soul/components/accordions/chevron'

export type AccordionItem = {
  title: ReactNode
  content: ReactNode
}

type Props = {
  className?: string
  accordions: AccordionItem[]
  type?: 'single' | 'multiple'
}

export const Accordions = forwardRef(function Accordions(
  { className, accordions, type = 'multiple' }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Accordion.Root type={type} ref={ref} className={clsx(className, 'font-body')} asChild>
      <ul className="mx-auto w-full max-w-7xl bg-background @container">
        {accordions.map((accordion, i) => (
          <Accordion.Item key={i} value={`${i + 1}`} asChild>
            <li className="group">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <div className="flex w-full cursor-pointer items-start py-3 @md:gap-8 @md:py-5">
                    <h3
                      className="mr-8 flex-1 select-none font-mono text-[13px] uppercase 
                      text-contrast-400 transition-colors duration-300 ease-out group-hover:text-foreground"
                    >
                      {accordion.title}
                    </h3>
                    <Chevron />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content
                className="w-full overflow-hidden
                data-[state=closed]:animate-collapse data-[state=open]:animate-expand"
              >
                <div className="w-full py-4 text-xl font-medium leading-tight text-foreground @md:text-2xl">
                  {accordion.content}
                </div>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
})

export default Accordions
