import { Feature } from '@/vibes/soul/components/feature'

export const feature: Feature = {
  image: {
    src: 'https://rstr.in/monogram/vibes/hmVsJqRS2jJ',
    altText: 'Close up of a plant',
  },
  title: 'For Your Home',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  cta: {
    href: 'string',
    label: 'string',
  },
}

const grid: Feature['grid'] = [
  {
    icon: 'Truck',
    title: 'Free Shipping',
    description: 'On orders over $250',
  },
  {
    icon: 'RotateCcw',
    title: 'Free Returns',
    description: 'On full priced items only',
  },
  {
    icon: 'Star',
    title: '2 Year Warranty',
    description: 'As standard',
  },
  {
    icon: 'Truck',
    title: 'Free Shipping',
    description: 'On orders over $250',
  },
  {
    icon: 'RotateCcw',
    title: 'Free Returns',
    description: 'On full priced items only',
  },
  {
    icon: 'Star',
    title: '2 Year Warranty',
    description: 'As standard',
  },
]

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <Feature
        image={feature.image}
        title={feature.title}
        description={feature.description}
        cta={feature.cta}
      />
      <Feature image={feature.image} cta={feature.cta} grid={grid} />
    </div>
  )
}
