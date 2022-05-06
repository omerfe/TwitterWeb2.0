import React from 'react'
import SidebarRow from './SidebarRow'
import {
    HomeIcon,
    BellIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    HashtagIcon,
    MailIcon,
    UserIcon
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center md:items-start'>
        <img className='h-10 w-10 m-3' src="https://links.papareact.com/drq" alt="twitter-logo" />
        <SidebarRow Icon={HomeIcon} title='Home'/>
        <SidebarRow Icon={HashtagIcon} title='Explore'/>
        <SidebarRow Icon={BellIcon} title='Notifications'/>
        <SidebarRow Icon={MailIcon} title='Messages'/>
        <SidebarRow Icon={BookmarkIcon} title='Bookmarks'/>
        <SidebarRow Icon={CollectionIcon} title='Lists'/>
        <SidebarRow Icon={UserIcon} title='Sign In'/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title='More'/>
    </div>
  )
}

export default Sidebar