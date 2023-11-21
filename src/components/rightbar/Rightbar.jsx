import './rightbar.scss'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="container">
        {/* friend suggestion */}
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <span>Monkey D</span>
            </div>
            <div className="buttons">
              <button className='button1'>Add</button>
              <button className='button2'>Dissmiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <span>Joro</span>
            </div>
            <div className="buttons">
              <button className='button1'>Add</button>
              <button className='button2'>Dissmiss</button>
            </div>
          </div>
        </div>
        {/* latest activites */}
        <div className="item">
          <span>Latest activites</span>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <span>John Wick</span>
              <p>Changed Cover Picture</p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <span>Rango</span>
              <p>Commented on your post</p>
            </div>
            <span>4 min ago</span>
          </div>
        </div>
        {/* online friend */}
        <div className="item">
          <span>Active People</span>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <div className='online'></div>
              <span>John Wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <div className='online'></div>
              <span>John Wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <div className='online'></div>
              <span>John Wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <div className='online'></div>
              <span>John Wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <div className='online'></div>
              <span>John Wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <div className='online'></div>
              <span>John Wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/images/login.jpg" alt="" />
              <div className='online'></div>
              <span>John Wick</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar