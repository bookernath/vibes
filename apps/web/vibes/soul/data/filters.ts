import { Brand, Filter } from '@/vibes/soul/types'

export const getFilters = (brand: Brand): Filter[] => {
  return filters[brand]
}

interface BrandFiltersMap {
  [key: string]: Filter[]
}

const filters: BrandFiltersMap = {
  electric: [
    {
      name: 'type',
      label: 'Type',
      type: 'checkbox-group',
      options: [
        { label: 'Indoor', value: 'indoor' },
        { label: 'Outdoor', value: 'outdoor' },
        { label: 'Pet Friendly', value: 'pet-friendly' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      type: 'checkbox-group',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
    },
    {
      name: 'price',
      label: 'Price',
      type: 'range',
      min: 0,
      max: 200,
      minLabel: '$',
      maxLabel: '$',
    },
    {
      name: 'rating',
      label: 'Rating',
      type: 'rating',
    },
  ],
  luxury: [
    {
      name: 'color',
      label: 'Color',
      type: 'checkbox-group',
      options: [
        { label: 'Black', value: 'black' },
        { label: 'Red', value: 'red' },
        { label: 'Brown', value: 'brown' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      type: 'checkbox-group',
      options: [
        { label: '5', value: '5' },
        { label: '5.5', value: '5.5' },
        { label: '6', value: '6' },
        { label: '6.5', value: '6.5' },
        { label: '7', value: '7' },
        { label: '7.5', value: '7.5' },
        { label: '8', value: '8' },
        { label: '8.5', value: '8.5' },
        { label: '9', value: '9' },
        { label: '9.5', value: '9.5' },
        { label: '10', value: '10' },
        { label: '10.5', value: '10.5' },
        { label: '11', value: '11' },
      ],
    },
    {
      name: 'price',
      label: 'Price',
      type: 'range',
      min: 0,
      max: 500,
      minLabel: '$',
      maxLabel: '$',
    },
    {
      name: 'rating',
      label: 'Rating',
      type: 'rating',
    },
  ],
  warm: [
    {
      name: 'color',
      label: 'Color',
      type: 'checkbox-group',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      type: 'checkbox-group',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
    },
    {
      name: 'price',
      label: 'Price',
      type: 'range',
      min: 0,
      max: 200,
      minLabel: '$',
      maxLabel: '$',
    },
    {
      name: 'rating',
      label: 'Rating',
      type: 'rating',
    },
  ],
}
