import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SMILENET</span>
            </div>
            <div className="topbarCentre">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="What are you looking for?" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <Person />
                    <span className="tobarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <Chat />
                    <span className="tobarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <Notifications />
                    <span className="tobarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/profile pics/cooldog.jpg" alt="" className="tobarImg"/>
            </div>
        </div>
    )

}