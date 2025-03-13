import {defineField, defineType} from 'sanity'

export const siteMetadataType = defineType({
  title: 'SEO',
  name: 'siteMetadata',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title:',
      type: 'string',
      description:
        "A website title meta tag summarizes a webpage's content for search engines and browsers.",
      validation: (Rule) =>
        Rule.required()
          .min(30)
          .max(60)
          .warning(`A title shouldn't be more than 60 characters or less then 30.`),
    }),
    defineField({
      name: 'description',
      title: 'Meta description:',
      type: 'text',
      description:
        "A description meta tag provides a brief summary of a webpage's content for search engine results and users.",
      validation: (Rule) =>
        Rule.required()
          .min(120)
          .max(150)
          .warning(`A description shouldn't be more than 150 characters or less then 120.`),
    }),
    defineField({
      title: 'Slug:',
      name: 'slug',
      type: 'string',
    }),
    defineField({
      title: 'Keywords:',
      name: 'siteKeywords',
      type: 'text',
    }),
    defineField({
      title: 'Open graphs large:',
      name: 'ogImageLg',
      type: 'image',
      description:
        'This image is like the face of a webpage on social media like facebook - it is what you see when you share a link and it should ideally be 1200 x 630 pixels in size.',
    }),
    defineField({
      title: 'Open graph small:',
      name: 'ogImageSm',
      type: 'image',
      description:
        'This one is for social medias that uses smaller images, like whatsapp, and it should ideally be 256 x 256 pixels in size and under 300KB in file size.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'ogImageSm',
    },
  },
})
