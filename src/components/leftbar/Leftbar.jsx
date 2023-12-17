import "./leftbar.scss";
import { Link } from "react-router-dom";

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
          <div className='item'>
            <img src='/images/1.png' alt='' />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src='/images/4.png' alt='' />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src='/images/8.png' alt='' />
            <span>Gallery</span>
          </div>
        </div>
        <hr />
        <div className='menu'>
          <span>Topics</span>
          <Link to={"/blood"} style={{ textDecoration: "none" }}>
            <div className='item'>
              <img src='/images/13.png' alt='' />
              <span>Blood Donation</span>
            </div>
          </Link>
          <div className='item'>
            <img src='/images/3.png' alt='' />
            <span>Book Borrowing</span>
          </div>
          <div className='item'>
            <img src='/images/12.png' alt='' />
            <span>Education</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
