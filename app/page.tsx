import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Heading, TableOfContents } from '@/components/ui/table-of-contents'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 h-96 w-full border border-black" />
      <main className="flex items-stretch gap-x-12">
        <div className="vibes-prose prose !w-full flex-1">
          <h1>This is a main header</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
            Pellentesque aliquet nibh nec urna. In <code>nisi neque</code>, aliquet vel, dapibus id,
            mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
            sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>

          <Heading as="h2">This is a secondary header</Heading>
          <p>
            Lorem <a href="/">ipsum dolor sit amet</a>, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
            mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
            sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>

          <div className="flex gap-1">
            <Button variant="default" size="default">
              Testing
            </Button>

            <Button variant="ghost" size="default">
              Testing
            </Button>
          </div>

          <Heading as="h2">This is long heading with a lot of text</Heading>

          <Heading as="h3">This is a smaller subheader</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
            Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
            nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          </p>

          <Heading as="h3">This is a list of stuff</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
            Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
            nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          </p>

          <ul>
            <li>This is a list item</li>
            <li>This is a list item</li>
            <li>This is a list item</li>
            <li>This is a list item</li>
          </ul>

          <Heading as="h2">This is a secondary header</Heading>
          <p>
            Lorem <a href="/">ipsum dolor sit amet</a>, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
            mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
            sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>

          <Heading as="h3">This is some code</Heading>
          <pre>
            <code>This is some example code</code>
          </pre>
        </div>

        <TableOfContents />
      </main>
    </div>
  )
}
