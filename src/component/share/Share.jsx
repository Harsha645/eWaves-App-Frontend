import './share.css'
import {MdPermMedia,MdLabel,MdLocationOn} from 'react-icons/md'
import {BsEmojiLaughingFill} from 'react-icons/bs'

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="src/assets/tokio.PNG" alt="" className="shareProfileImg" />
                    <input placeholder='What is in your mind ?' className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia color='tomato' className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <MdLabel color='blue' className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <MdLocationOn color='green' className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <BsEmojiLaughingFill color='goldenrod' className="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share