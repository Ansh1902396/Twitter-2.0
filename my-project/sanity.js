import { createClient } from "next-sanity";


export const config = {
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET, 
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion : '2021-03-25', 
  useCdn  : process.env.NODE_ENV === 'twitter-data', 
}

export const  sanityClient = createClient(config)


