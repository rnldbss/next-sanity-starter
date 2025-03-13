import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index'

//import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'next-sanity',

  projectId: 'dphnacxa',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(), // change to structureTool({ structure }) to enable structure
    visionTool(),
  ],
})
