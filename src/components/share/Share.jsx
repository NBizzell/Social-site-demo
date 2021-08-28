import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

export default function share() {
    return (
        <div>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/profile pics/eggman.jpg" alt=""/>
                    <inout placeholder="Got anything to say?" 
                    className="shareInput"
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="red" className="shareIcon"/>
                            <span className="shareOptionText">Tag Someone</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="orange" className="shareIcon"/>
                            <span className="shareOptionText">Thoughts and Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}