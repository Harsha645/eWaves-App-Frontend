import { useState } from 'react'
import './post.css'
import { MdOutlineMoreVert } from 'react-icons/md'
import { Users } from '../../dummyData'



const Post = (Post) => {
    const {post} = Post
    const [like, setLike] = useState(post.like)
    const [isLike, SetIsLike] = useState(false)
    // console.log(Post);
    // console.log(post.desc);
    const likeHandler = ()=>{
        setLike(isLike? like-1 : like+1)
        SetIsLike(!isLike)
    }    

    return (
        
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=> u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUserName">
                            {Users.filter(u=> u.id===post?.userId)[0].userName}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MdOutlineMoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc} </span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/love.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="postLikeCounter">{like} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post