import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from "@mui/icons-material/Apps"
import {Avatar} from "@mui/material"
import {Search} from "../Component/Search.jsx"

export const Home = () => {
  return (
    <div className="Home">
    <div className="Home_header">
<div className="header_left">
    <Link to="/about"> about </Link>
    <Link to="/store">store</Link>

</div>
<div className="header_right">

<Link to='/gmail'>gmail</Link>
<Link to="/images">images</Link>
<AppsIcon />
<Avatar />
</div>
    </div>
    <div className="Home_body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" />
        <div className="home_inputcontainer">
            <Search />

        </div>

    </div>
    </div>
  )
}
