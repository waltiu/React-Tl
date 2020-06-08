import React ,{useState,useEffect} from 'react'
import Model from '../../../com/Model'
import Line from './line'
import {Input} from 'antd'
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const url = "http://i0.cy.com/xtl/main/20200506/logo_20200506.png"
const Login:React.FC = ( ) =>{
  const [pageState,changePageState] = useState<boolean>(false)
  const [inputVisible, changeInputVisible] = useState<boolean>(false);
  
  const openLoginPage = () =>{
    changePageState(!pageState)
  }
  const title =1
  useEffect(()=>{
    setTimeout(() => {
      changeInputVisible(true)
    }, 1000);
  })
  return (
    <div className="home_login" >
      <div onClick={openLoginPage}>
        <div className="login_button1"></div>
        <div className="login_button2"></div>
      </div>
      <Model visible={pageState} footer={null} onCancel={openLoginPage}>
        <img src={url} className="login_title"/>
        <p className="login_title2">天龙八部账号信息网</p>
        <div className="login_form">
          <div style={{ display: "flex", position: "relative" }}>
            <p>用户名：</p>
            <Line />
            {inputVisible && (
              <div className="login_input">
                <Input style={{ border: "none" }} />
              </div>
            )}
          </div>
          <div style={{ display: "flex", position: "relative",marginTop:'20px' }}>
            <p>密&nbsp;&nbsp;&nbsp;&nbsp;码：</p>
            <Line />
            {inputVisible && (
              <div className="login_input">
                <Input style={{ border: "none" }} type="password" />
              </div>
            )}
          </div>
        </div>
      </Model>
    </div>
  );
}
export default Login