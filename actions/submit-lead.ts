'use server'

import { SubmissionResult } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import Airtable from 'airtable'
import { Resend } from 'resend'

import WaitlistEmail from '@/components/emails/waitlist'
import { env } from '@/lib/env'
import { submitLeadSchema } from '@/lib/schema'

const base = new Airtable({ apiKey: env.AIRTABLE_ACCESS_TOKEN }).base(env.AIRTABLE_BASE_ID)

const resend = new Resend(env.RESEND_API_KEY)

export async function submitLead(
  prevState: unknown,
  formData: FormData
): Promise<SubmissionResult> {
  const submission = parseWithZod(formData, { schema: submitLeadSchema })

  if (submission.status !== 'success') return submission.reply()

  const email = submission.value.email

  try {
    await base(env.AIRTABLE_LEADS_TABLE_ID).create(
      { Source: 'Vibes', Email: email },
      { typecast: true }
    )

    resend.emails.send({
      from: 'Vibes <hello@vibes.site>',
      to: [email],
      subject: `Welcome to Vibes!`,
      react: WaitlistEmail(),
    })

    return submission.reply()
  } catch (e) {
    console.error(e)

    return submission.reply({ formErrors: ['Failed to submit email'] })
  }
}
