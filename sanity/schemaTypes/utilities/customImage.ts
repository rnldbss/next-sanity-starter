import { defineField, defineType } from "sanity";

import {ImageIcon} from '@sanity/icons'

export const customImageType = defineType({
  name: 'customImage',
  title: 'Image:',
  type: 'image',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      title: 'Alternative Text:',
      name: 'alt',
      type: 'string',
      description:
        'Alt text is a brief description of an image that can be read by screen readers, allowing people with visual impairments to understand the content of the image.',
      validation: (Rule) =>
        Rule.error(
          'To maintain your website accesible for people with disabilities the alternative text is required.',
        ).required(),
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'customImage'
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})