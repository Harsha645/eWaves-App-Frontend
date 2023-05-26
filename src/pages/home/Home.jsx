import './home.css'
import Topbar from '../../component/topbar/Topbar'
import Feed from '../../component/feed/Feed'
import Sidebar from '../../component/sidebar/Sidebar'
import Rightbar from '../../component/rightbar/Rightbar'

const Home = () => {
  return (
    <div>
      <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed/>
          <Rightbar/>
          
        </div>

      </>
    </div>
  )
}

export default Home