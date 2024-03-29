import React from "react";
import './Sidebar.css';

import SidebarRow from "./SidebarRow";

import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
 
function Sidebar() {
    return (
        <div className="Sidebar">

            <SidebarRow selected Icon={HomeSharpIcon} title="Home"/>
            <SidebarRow Icon={ExploreSharpIcon} title="Explore"/>
            <SidebarRow Icon={WhatshotSharpIcon} title="Shorts"/>
            <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscriptions"/>

            <hr/>

            <SidebarRow Icon={VideoLibrarySharpIcon} title="Library"/>
            <SidebarRow Icon={HistorySharpIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoSharpIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltSharpIcon} title="Liked Videos"/>
            <SidebarRow Icon={ExpandMoreSharpIcon} title="Show More"/>

            <hr/>
 
        </div>
    )
}

export default Sidebar