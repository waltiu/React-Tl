import React, {  } from "react";
import './index.css'
import Login from './Login'
import titleUrl from './source/title.jpeg'
const bgUrl = "http://i0.cy.com/xtl/load/20200426/slogan.png"

const Home: React.FC = () => {
  return (
    <div className="home_module">
      <div className="home_title">
        <img src={bgUrl} />
        <p className="home_titlep">天龙八部信息平台</p>
      </div>
      <Login />
    </div>
  );
};
export default Home;