import { transformerRemoveLineBreak } from '@shikijs/transformers'
import { readFile } from 'fs/promises'
import { codeToHtml } from 'shiki'

interface Props {
  pathname: string
}

export async function CodeFromFile({ pathname }: Props) {
  const file = await readFile(process.cwd() + pathname, 'utf8')
  const code = await codeToHtml(file, {
    lang: 'javascript',
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    transformers: [transformerRemoveLineBreak()],
  })

  return <div dangerouslySetInnerHTML={{ __html: code }} />
}
