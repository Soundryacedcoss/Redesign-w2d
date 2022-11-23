import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate } from 'react-router-dom';
import { SignUp } from './SignUp';
export const LoginPage=()=> {
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[pass,setPass]=useState('');
  const[userdataname,setUserdataname]=useState([]);
  const[userlogname,setuserLogname]=useState('');
  const passwHandler=(e)=>{
    setPass(e.target.value)
}
const userNameHandler=(e)=>{
  setuserLogname(e.target.value)
}
// Back to sign up page
const SignUpHere=()=>{
  console.log('jufwe');
  <SignUp />
//  <></> 
}
const LoginButtonHandler=()=>{
  let userlogdata=localStorage.getItem("data",userdataname)
  let userlogdata1=JSON.parse(userlogdata)
  console.log(userlogdata1);
  for(var i=0;i<userlogdata1.length;i++){
    // checking the data which is taken from user
    if(userlogname===userlogdata1[i].username && pass===userlogdata1[i].password){
      console.log("success");
      navigate('/');
    }
    else if(userlogname!==userlogdata1[i].username){
      alert("Wrong username");
    }
    else if(pass!==userlogdata1[i].password){
      alert("wrong password");
    } 
  }  
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>Login Here</h2></Modal.Title>
        </Modal.Header>
    <div class="LoginPage">
    <input className='INputDiv' type="text" placeholder="Enter Username" name="uname" onChange={userNameHandler} required/>
    <input type="password" placeholder="Enter Password" name="psw" onChange={passwHandler} required/>    
    <button onClick={LoginButtonHandler} className='SignUpBUtton' type="submit">Login</button>
    <p className="LoginSignUpLink" onClick={SignUpHere}>Don't Have Account <b>Register Now</b></p>
    </div>
        
      </Modal>
    </>
  );
}

