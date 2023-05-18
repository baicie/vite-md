import type { Plugin } from 'vite'
import type { MarkdownOptions } from './markdown/markdown'
import { createMarkdownToVueRenderFn } from './markdownToVue'

interface Options {
  root?: string
  markdown?: MarkdownOptions
}

export function VitePluginMd(options: Options = {}): Plugin {
  const { root, markdown } = options
  const markdownToVue = createMarkdownToVueRenderFn(root, markdown)
  return {
    name: 'mdToVue',
    async transform(code, id) {
      if (id.endsWith('.md'))
        return { code: (await markdownToVue(code, id)).vueSrc, map: null }
    },
  }
}
