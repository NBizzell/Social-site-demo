import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="Assets/birthdaycake.png" alt=""/>
                    <span className="birthdayText">
                        <b>Alonzo Harris</b> and <b>Archie Tuttle</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="Assets/spam-ad1.jpg" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFrienList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="Assets/profile pics/tetsuotheironman2.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jules Winnfield</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="Assets/profile pics/tetsuotheironman2.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Anton Chigurh</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="Assets/profile pics/tetsuotheironman2.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rupert Pupkin</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="Assets/profile pics/tetsuotheironman2.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ellen Ripley</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}