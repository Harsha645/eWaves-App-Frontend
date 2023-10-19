import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({ profile }) => {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.PNG" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Mahela</b> and <b>3 others</b> birthday today</span>
        </div>
        <div className="rightbarAd">
          <img src="/assets/coke.jpg" alt="" className="rightbarAdImg" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Colombo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Nugegoda</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="src/assets/person/1.PNG" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mahela 27</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/2.PNG" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">TM Dilshan</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/3.PNG" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mahela Jayawardane</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/4.PNG" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sanga 11</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/5.PNG" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kumar Sangakkara</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/6.PNG" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lasith Malinga</span>
          </div>
        </div>

      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar



