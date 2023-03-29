import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import { Tweet } from '@/typings'
import { fetchTweets } from '@/utils/fetchTweets'
import { GetServerSideProps } from 'next'

import Head from 'next/head'
import Image from 'next/image'


interface Props{
  tweets : Tweet[]
}

export default function Home({tweets} :Props) {
  return (
    <div className='mx-auto max-h-screen overflow-hidden lg:max-w-6xl'>
      <Head> 
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='grid grid-cols-9'>
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed tweets = {tweets} />
        {/* Widget */}
        <Widgets/>
      </main>
    </div>
  )
}


export const getServerSideProps:GetServerSideProps  = async (context) =>{

  const tweets  = await fetchTweets(); 
  return {
    props : {

    }
  }
}