import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
// avatar is a component that can take a source from an image that you're going to use
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src ="https://avatars0.githubusercontent.com/u/51037713?s=460&v=4"></Avatar>
                <div className='sidebar_headerRight'>  
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>  
                    <IconButton>
                    <ChatIcon />
                    </IconButton>  
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>       

                </div>

            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
