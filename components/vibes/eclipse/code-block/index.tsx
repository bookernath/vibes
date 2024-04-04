'use client'

import { Ref, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-javascript'

type Props = {
  className?: string
  code?: string
  language?: 'js' | string
  maxHeight?: number
  hideCopy?: boolean
}

const CodeBlock = forwardRef(function CodeBlock(
  { className, code = '', language = 'js', maxHeight = 800, hideCopy }: Props,
  ref: Ref<HTMLPreElement>
) {
  const selectedLanguage = languages[language] ?? languages.js
  const [html, setHtml] = useState(highlight(code, selectedLanguage, language))
  const [copySuccess, setCopySuccess] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      function () {
        setCopySuccess(true)
      },
      function (err) {
        console.error('Copy failed:', err)
        setCopySuccess(false)
      }
    )
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (copySuccess) {
      timeoutId = setTimeout(() => {
        setCopySuccess(false)
      }, 2500)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [copySuccess])

  useEffect(() => {
    setHtml(highlight(code, selectedLanguage, language))
  }, [language, code, selectedLanguage])

  return (
    <div className={clsx('@container group relative', className)}>
      <pre
        ref={ref}
        className={`language-${language} @2xl:rounded-3xl @md:p-6 overflow-auto rounded-2xl p-5 ring-1 ring-border`}
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ maxHeight }}
      />

      {!hideCopy && (
        <button
          className="group/button @md:right-5 @md:top-5 absolute right-4 top-4 translate-y-0 opacity-100 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-1 sm:opacity-0"
          onClick={handleCopy}
        >
          <div className="relative h-4 w-4">
            <div
              className={clsx('relative h-full w-full transition', {
                '-translate-y-0 opacity-100': !copySuccess,
                '-translate-y-full opacity-0': copySuccess,
              })}
            >
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded bg-foreground opacity-50"></div>
              <div className="absolute right-0 top-0 h-3 w-3 rounded bg-foreground ring-1 ring-background transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"></div>
            </div>

            <svg
              viewBox="0 0 16 16"
              className={clsx('absolute inset-0 h-4 w-4 transition', {
                'translate-y-full opacity-0': !copySuccess,
                'translate-y-0 opacity-100': copySuccess,
              })}
            >
              <path d="M1.5 7.5L6 12L14.5 3.5" className="stroke-foreground" strokeWidth="2" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
})

export default CodeBlock
