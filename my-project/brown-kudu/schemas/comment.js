import {defineField, defineType} from 'sanity'
import tweet from './tweet'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'username',
      type: 'string',
    }),
    defineField({
      name: 'profileimg',
      title: 'profileimg',
      type: 'string',
    }),
    defineField({
      name: 'tweet',
      title: 'Tweet',
      description: 'reference the tweet the comment is associated with' , 
      type: 'reference',
      to :{
        type :'Tweet',
      }
    }),
    
  ],
})
