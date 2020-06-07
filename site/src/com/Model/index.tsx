import React from 'react'
import { Modal, Input } from 'antd';
import './index.css'
interface childProps {
  visible:boolean;
  title?:string;
  footer?:any;
  onOk?(): void;
  onCancel?():void;
} 

const Model: React.FC<childProps> = (props) =>{
  return (
    <Modal
      {...props}
      className="modal_style"
      style={{ position: "relative" }}
      width="50vw"
      maskClosable={false}
      mask={false}
    >
      <img
        src="http://i1.cy.com/xtl/main/20200430/videoBorder.png"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="modal_content">{props.children}</div>
    </Modal>
  );
}
export default Model;