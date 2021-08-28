import "./leftbar.css"
import {RssFeed, Chat, Bookmark} from "@material-ui/icons";


export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeed className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarIcon"/>
                        <span className="leftbarListItemText">Chat</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarIcon"/>
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profile pics/Cyber-woman-corn-closeup.jpg" alt=""/>
                        <span className="leftbarFriendName">CyberCornLady</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profile pics/Cyber-woman-corn-closeup.jpg" alt=""/>
                        <span className="leftbarFriendName">CyberCornLady</span>
                    </li>                <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profile pics/Cyber-woman-corn-closeup.jpg" alt=""/>
                        <span className="leftbarFriendName">CyberCornLady</span>
                    </li>                <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profile pics/Cyber-woman-corn-closeup.jpg" alt=""/>
                        <span className="leftbarFriendName">CyberCornLady</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}