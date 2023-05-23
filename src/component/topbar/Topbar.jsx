import './topbar.css'
import { AiOutlineSearch } from 'react-icons/ai'


const Topbar = () => {
  return (
      <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">eWaves App</span>
        </div>
        <div className="topbarCenter">
          <div className="serchbar">
            <AiOutlineSearch/>
          </div>
        </div>
        <div className="topbarRight"></div>
      </div>
  )
}

export default Topbar

