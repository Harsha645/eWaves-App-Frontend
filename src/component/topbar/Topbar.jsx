import './topbar.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillPersonFill, BsFillChatFill } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'



const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">eWaves App</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <AiOutlineSearch className='searchIcon' />
          <input placeholder='search for friend, post or video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatFill />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <MdNotifications />
            <span className="topbarIconBadge">7</span>
          </div>
        </div>
        <img src="src/assets/tokio.PNG" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar

