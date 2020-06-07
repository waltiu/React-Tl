import React ,{useState,useEffect} from 'react'
import Model from '../../../com/Model'
import Line from './line'
import {Input} from 'antd'
import { LockOutlined, UserOutlined } from "@ant-design/icons";

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
    }, 4000);
  })
  return (
    <div className="home_login" onClick={openLoginPage}>
      <div className="login_button1"></div>
      <div className="login_button2"></div>

      <Model visible={pageState} footer={null}>
        <div>
          <div style={{ display: "flex", position: "relative" }}>
            <p>用户名：</p>
            <Line />
            {inputVisible && (
              <div className="login_input">
                <Input style={{ border: "none" }} />
              </div>
            )}
          </div>
          <div style={{ display: "flex", position: "relative" }}>
            <p>密&nbsp;&nbsp;&nbsp;&nbsp;码：</p>
            <Line />
            {inputVisible && (
              <div className="login_input">
                <Input style={{ border: "none" }} />
              </div>
            )}
          </div>
        </div>
      </Model>
    </div>
  );
}
export default Login