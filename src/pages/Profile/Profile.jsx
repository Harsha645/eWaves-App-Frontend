import './profile.css'
import Topbar from '../../component/topbar/Topbar'
import Feed from '../../component/feed/Feed'
import Sidebar from '../../component/sidebar/Sidebar'
import Rightbar from '../../component/rightbar/Rightbar'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightRight">
                        <div className="profileCover">
                            <img src="/assets/posts/1.PNG" alt="" className="profileCoverImg" />
                            <img src="/assets/person/3.PNG" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Mahela Jayawardane</h4>
                            <span className="profileInfoDesc">Former Sri Lankan Test Captain</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile