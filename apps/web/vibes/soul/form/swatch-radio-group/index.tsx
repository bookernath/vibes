import Image from 'next/image'
import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'
import { X } from 'lucide-react'

import { ErrorMessage } from '@/vibes/soul/form/error-message'
import { Label } from '@/vibes/soul/form/label'

type SwatchOption =
  | {
      type: 'color'
      value: string
      label: string
      color: string
      disabled?: boolean
    }
  | {
      type: 'image'
      value: string
      label: string
      image: { src: string; alt: string }
      disabled?: boolean
    }

export const SwatchRadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string
    options: SwatchOption[]
    errors?: string[]
  }
>(({ id, label, options, errors, className, ...rest }, ref) => {
  return (
    <div className={clsx('space-y-2', className)}>
      {label !== undefined && label !== '' && <Label htmlFor={id}>{label}</Label>}
      <RadioGroupPrimitive.Root {...rest} ref={ref} aria-label={label} className="flex gap-2">
        {options.map(option => (
          <RadioGroupPrimitive.Item
            key={option.value}
            value={option.value}
            aria-label={option.label}
            disabled={option.disabled}
            className={clsx(
              'group relative box-content h-8 w-8 rounded-full border p-0.5 transition-colors hover:border-contrast-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:hover:border-transparent data-[disabled]:pointer-events-none data-[state=checked]:border-foreground [&:disabled>.disabled-icon]:grid',
              errors && errors.length > 0
                ? 'border-error disabled:border-transparent'
                : 'border-transparent'
            )}
          >
            {option.type === 'color' ? (
              <span
                className="block size-full rounded-full border border-foreground/10 group-disabled:opacity-20"
                style={{ backgroundColor: option.color }}
              />
            ) : (
              <span className="relative block h-10 w-10 rounded-full border border-foreground/10">
                <Image src={option.image.src} alt={option.image.alt} height={40} width={40} />
              </span>
            )}
            <div className="disabled-icon absolute inset-0 hidden place-content-center text-foreground">
              <X size={16} strokeWidth={1.5} />
            </div>
          </RadioGroupPrimitive.Item>
        ))}
      </RadioGroupPrimitive.Root>
      {errors?.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
    </div>
  )
})

SwatchRadioGroup.displayName = 'SwatchRadioGroup'