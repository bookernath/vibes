'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes14Back, Vibes14Front, Vibes14Shadow } from '@/icons/generated'

export function Vibes14() {
  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-[460px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="-translate-x-40 translate-y-[250px] -rotate-90"
            to="translate-x-0 translate-y-0 rotate-12"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={35}
              hoverPeel={0.2}
              activePeel={0.3}
              width={200}
              height={72}
              front={<Vibes14Front />}
              back={<Vibes14Back />}
              shadow={<Vibes14Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}