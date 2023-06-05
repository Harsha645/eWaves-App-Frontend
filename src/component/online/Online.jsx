import './online.css'

const Online = ({user}) => {
  return (
    <div>
        <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightBarOnline"></span>
              </div>
              <span className="rightBarUserName">{user.userName}</span>
            </li>
    </div>
  )
}

export default Online