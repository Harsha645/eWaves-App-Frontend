import './sidebar.css'
import { MdRssFeed,MdGroup,MdWorkOutline,MdOutlineEvent } from 'react-icons/md'
import { BsFillChatLeftTextFill,BsFillBookmarksFill,BsQuestionOctagonFill } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'
import { GiDiploma } from 'react-icons/gi'



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdRssFeed className='sidebarIcon' />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillChatLeftTextFill className='sidebarIcon' />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <AiFillPlayCircle className='sidebarIcon' />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdGroup className='sidebarIcon' />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillBookmarksFill className='sidebarIcon' />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsQuestionOctagonFill className='sidebarIcon' />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdWorkOutline className='sidebarIcon' />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineEvent className='sidebarIcon' />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <GiDiploma className='sidebarIcon' />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    
                </ul>
                \<button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="src/assets/Capture.PNG" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lanka</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="src/assets/Capture.PNG" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lanka</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="src/assets/Capture.PNG" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lanka</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="src/assets/Capture.PNG" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lanka</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="src/assets/Capture.PNG" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lanka</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="src/assets/Capture.PNG" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lanka</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="src/assets/Capture.PNG" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lanka</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar