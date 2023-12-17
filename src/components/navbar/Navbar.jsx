import "./navbar.scss";
import React, { useContext, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { AuthContext } from "../../Context/AuthContext.jsx";
import { makeRequest } from "../../axios.jsx";
function Navbar() {
  const navigate = useNavigate();
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser, logout, setCurrentUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/login");
      localStorage.removeItem("user");
      setCurrentUser(null);
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>Connecto</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon className='darkMode' onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className='darkMode' onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className='search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon />
        <MailOutlinedIcon />
        <NotificationsNoneIcon />
        <div className='user' onClick={toggleDropdown}>
          <img src={`/images/${currentUser.profilePic}`} alt='' />
          <span>{currentUser.name}</span>
          {dropdownOpen && (
            <div className='dropdown'>
              <Link to={`/profile/${currentUser.id}`}>Profile</Link>
              {/* <Link onClick={logout} to='/login'>Logout</Link> */}
              <div onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
