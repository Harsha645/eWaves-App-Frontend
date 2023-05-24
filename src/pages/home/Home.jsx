import React from 'react'
import Topbar from '../../component/topbar/Topbar'
import Feed from '../../component/feed/Feed'
import Sidebar from '../../component/sidebar/Sidebar'

const Home = () => {
  return (
    <div>
      <>
        <Topbar />
        <Sidebar />
      </>
    </div>
  )
}

export default Home