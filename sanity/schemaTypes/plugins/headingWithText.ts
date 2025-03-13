import {defineField, defineType} from 'sanity'

export const headingWithTextType = defineType({
  name: 'headingWithText',
  type: 'object',
  title: 'Heanding with text',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    
    defineField({
      name: 'body',
      type: 'blockContent',
    }),  

    defineField({
        name: 'columns',
        type: 'string',
        options: {
            list: [
                {title: 'One column', value: 'column-1'},
                {title: 'Two column', value: 'column-2'}
            ]
        }
    })
    
  
  ],
})