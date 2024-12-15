import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { FieldGroup, Field, schema } from '@/vibes/soul/primitives/dynamic-form/schema';

export const fields = [
  [
    { type: 'text', label: 'First Name', name: 'first-name', required: true },
    { type: 'text', label: 'Last Name', name: 'last-name', required: true },
  ],
  { type: 'email', label: 'Email', name: 'email', required: true },
  {
    type: 'swatch-radio-group',
    label: 'Color',
    name: 'color',
    options: [
      { type: 'color', value: 'red', label: 'Red', color: '#ff0000' },
      { type: 'color', value: 'blue', label: 'Blue', color: '#0000ff' },
    ],
    required: true,
    defaultValue: 'red',
  },
  {
    type: 'button-radio-group',
    label: 'Size',
    name: 'size',
    options: [
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
    ],
    required: true,
  },
  {
    type: 'checkbox',
    label: 'Include Pot',
    name: 'pot',
  },
  {
    type: 'radio-group',
    label: 'Age',
    name: 'age',
    required: true,
    options: [
      { value: 'young', label: 'Young' },
      { value: 'mature', label: 'Mature' },
    ],
  },
  {
    type: 'select',
    label: 'Light requirements',
    name: 'light-requirements',
    required: true,
    options: [
      { value: 'low', label: 'Low light' },
      { value: 'partial', label: 'Partial light' },
      { value: 'direct', label: 'Direct light' },
    ],
  },
  {
    type: 'card-radio-group',
    label: 'Variety',
    name: 'variety',
    required: true,
    options: [
      {
        label: 'Small',
        value: 'sm',
        image: {
          src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
          alt: 'Philodendron Imperial Red',
        },
      },
      {
        label: 'Medium',
        value: 'md',
        image: {
          src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
          alt: 'Monstera',
        },
      },
      {
        label: 'Large',
        value: 'lg',
        image: {
          src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
          alt: 'Pink Caladium',
        },
        disabled: true,
      },
    ],
  },
] satisfies Array<Field | FieldGroup<Field>>;

export async function action(
  prevState: { fields: Array<Field | FieldGroup<Field>>; lastResult: SubmissionResult | null },
  payload: FormData,
) {
  'use server';

  const submission = parseWithZod(payload, { schema: schema(prevState.fields) });

  if (submission.status !== 'success') {
    return {
      fields: prevState.fields,
      lastResult: submission.reply({ formErrors: ['Boom!'] }),
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    fields: prevState.fields,
    lastResult: submission.reply(),
  };
}
