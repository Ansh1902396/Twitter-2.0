import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'brown-kudu',

  projectId: 'rbfzuq9y',
  dataset: 'twitter-data',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
