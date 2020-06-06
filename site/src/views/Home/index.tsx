import React, {  } from "react";
import './index.css'
import Login from './Login'
const url = "http://i0.cy.com/xtl/load/20200426/slogan.png"
const Home: React.FC = () => {
  return (
    <div className="home_module">
      <div className="home_title">
        <img src={url} />
        <p className="home_titlep">天龙八部信息平台</p>
      </div>
      <audio  controlsList="nodownload" autoPlay loop>            
                <source src={require('./source/bg.mp3')} type="audio/ogg"  />
        <track kind="captions" />
      </audio>

      <Login />
    </div>
  );
};
export default Home;