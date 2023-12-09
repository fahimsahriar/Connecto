import './navbar.scss'
import React, { useContext } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from "react-router-dom"
import { DarkModeContext } from '../../Context/DarkModeContext';
import { AuthContext } from '../../Context/AuthContext';

function Navbar() {
  const {darkMode,toggle} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} style={{textDecoration:"none"}}>
          <span>Connecto</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon className='darkMode' onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className='darkMode' onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MailOutlinedIcon />
        <NotificationsNoneIcon />
        <div className='user'>
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar