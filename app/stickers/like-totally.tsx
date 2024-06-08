'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { TotallyBack, TotallyFront, TotallyShadow } from '@/icons/generated'

export function LikeTotally() {
  return (
    <div className="pointer-events-none absolute left-[-15%] top-[130%] hidden sm:block">
      <Draggable>
        {({ active }) => (
          <Transition
            className="transition-transform duration-1000 [transition-delay:1900ms]"
            from="translate-x-[-450px] translate-y-[700px] rotate-[-80deg]"
            to="translate-x-0 translate-y-0 rotate-[12deg]"
          >
            <Sticker
              active={active}
              peelAngle={-14}
              hoverPeel={0.2}
              activePeel={0.3}
              width={340}
              height={172}
              front={<TotallyFront />}
              back={<TotallyBack />}
              shadow={<TotallyShadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}
