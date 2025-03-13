import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Link',
  name: 'selectLink',
  type: 'object',
  fields: [
    defineField({
      title: 'Select the type of link',
      description:
        'External links go to other websites using the format `https://www.google.com`. Internal links are restricted pages within your website.',
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          {title: 'External', value: 'external'},
          {title: 'Internal', value: 'internal'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'external', // hidden if link type is not external
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    }),

    defineField({
      name: 'internalLink',
      type: 'string',
      title: 'Internal Link',
      hidden: ({parent}) => parent?.linkType !== 'internal', // hidden if link type is not internal
      options: {
        list: [
          {title: 'Home', value: '/'},
          // other types you may want to link to
        ],
      },
    }),
  ],
})
