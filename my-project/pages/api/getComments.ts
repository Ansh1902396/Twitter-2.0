import { sanityClient } from '@/sanity'
import { Comment } from '@/typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

const commentQuery = groq`
*[_type == 'comment' && references(*[_type == 'Tweet' && _id == $tweetId]._id)]{
    id, 
    ...
} | order(_createdAt desc)
`

type Data = Comment[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const {tweetId} = req.query;

    const comments : Comment[] = await sanityClient.fetch(commentQuery , {
        tweetId,
    })
  res.status(200).json(comments)
}