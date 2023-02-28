import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { getDefaultDocumentNode } from './structure'

export default defineConfig({
  name: 'default',
  title: 'sanity_blog',

  projectId: '7risvk1b',
  dataset: 'production',

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
