import React from 'react'

import {
    HomeIcon, 
    UserIcon, 
    BellIcon, 
    BookmarkIcon, 
    ArchiveBoxIcon, 
    EnvelopeIcon, 
    HashtagIcon, 
    Bars3Icon,
} from '@heroicons/react/24/outline'
import SidbarRow from './SidebarRow';



function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img className=" m-3 h-10 w-10" src = "https://links.papareact.com/drq" />
      <SidbarRow Icon={HomeIcon} title={"Home"}/>
      <SidbarRow Icon={HashtagIcon} title={"Explore"}/>
      <SidbarRow Icon={BellIcon} title={"Notifications"}/>
      <SidbarRow Icon={EnvelopeIcon} title={"Messages"}/>
      <SidbarRow Icon={BookmarkIcon} title={"Bookmarks"}/>
      <SidbarRow Icon={ArchiveBoxIcon} title={"Lists"}/>
      <SidbarRow Icon={UserIcon} title={"Sign In"}/>
      <SidbarRow Icon={Bars3Icon} title={"More"}/>
    </div>
  )
}

export default Sidebar;
