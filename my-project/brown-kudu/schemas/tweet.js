import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'Text',
      title: 'Text in the tweet',
      type: 'string',
    }),
    defineField({
      name: 'Block', 
      title : 'Block', 
      description: 'ADMIN can block inappropriate tweets',
      type: 'boolean',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile image',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    }),
  ],

})
