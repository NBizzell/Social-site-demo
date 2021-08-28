import "./post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/Assets/profile pics/elderweapon.jpg" alt=""/>
                        <span className="postUsername">Margaret Baxter</span>
                        <spam className="postDate">4 mins ago</spam>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCentre">
                    <span className="postText">Hello world! Just bought myself a new armchair!</span>
                    <img className="postImg" src="Assets/posts/catbasket.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="Assets/smilethumbup.jpg" alt="" />
                        <span className="postLikeCounter">5 people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">3 comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}