import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
}
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    publishDate: { type: 'date' },
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Post],
  markdown: { },
})