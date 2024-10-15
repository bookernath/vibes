import { CartLineItem } from '@/vibes/soul/components/cart'
import { Checkout } from '@/vibes/soul/components/checkout'

export const products: CartLineItem[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$46',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Philodendron Imperial Red',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Caladium',
    subtitle: 'Indoor / Outdoor Plant',
    price: '$24',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      altText: 'Caladium',
    },
    quantity: 2,
  },
]

export default function Preview() {
  return <Checkout products={products} />
}
