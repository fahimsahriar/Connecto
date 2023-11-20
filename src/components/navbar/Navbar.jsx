import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} style={{textDecoration:"none"}}>
          <span>Connecto</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
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
          <img src="/images/login.jpg" alt="" />
          <span>John Wick</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar