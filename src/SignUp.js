import React,{ useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate } from 'react-router-dom';
import './SignUpLogin.css'
export const SignUp = () => {
    const navigate=useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState('')
    const[number,setNumber]=useState('')
    const[logarr,setLogarr]=useState([])
    // functions for taking the value from input boxes
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const usernameHandler=(e)=>{
        setUsername(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
    const numberHandler=(e)=>{
        setNumber(e.target.value)
    }
    const SignUpButtonHandler=()=>{
        var atposition=email.indexOf("@");
        var dotposition=email.lastIndexOf(".");
        if(name===""){
          alert("name should not be empty")
          document.form.name.focus();
        }
        else if(!isNaN(name)){
          alert("Name Should not be integer");
          document.form.name.focus();
        }const SignUpButtonHandler=()=>{
            var atposition=email.indexOf("@");
            var dotposition=email.lastIndexOf(".");
            if(name===""){
              alert("name should not be empty")
              document.form.name.focus();
            }
            else if(!isNaN(name)){
              alert("Name Should not be integer");
              document.form.name.focus();
            }
            else if(email===""){
              alert("Plese enter your email");
              document.form.email.focus();
            }
            else if ((atposition<1 || email.lastIndexOf(".")<atposition+2 || dotposition+2>=email.length)) {
              alert("please enter valid email");
              document.form.email.focus();
            }
            else if(username===""){
              alert("Please enter your username");
              document.form.username.focus();
            }
            else if(password===""){
              alert("please enter password");
              document.form.psw.focus();
            }
            else if(number===""){
              alert("Enter mobile number")
              document.form.number.focus();
            }
            else if(isNaN(number)){
              alert("number should be integer")
              document.form.number.focus();
           }
        else if(email===""){
          alert("Plese enter your email");
          document.form.email.focus();
        }
        else if ((atposition<1 || email.lastIndexOf(".")<atposition+2 || dotposition+2>=email.length)) {
          alert("please enter valid email");
          document.form.email.focus();
        }
        else if(username===""){
          alert("Please enter your username");
          document.form.username.focus();
        }
        else if(password===""){
          alert("please enter password");
          document.form.psw.focus();
        }
        else if(number===""){
          alert("Enter mobile number")
          document.form.number.focus();
        }
        else if(isNaN(number)){
          alert("number should be integer")
          document.form.number.focus();
       }
        }
    }   
// back to login page
const Loginhere=()=>{
    navigate()
  }
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        SignUp
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <h1>Sign Up</h1>
        </Modal.Header>
        <div className="LoginPage" >
          <input type="text" className='INputDiv' name="name" placeholder="Full name" onChange={nameHandler}  />
          <input type="text" className='INputDiv' placeholder="Enter Email" name="email" onChange={emailHandler} />
          <input type="text" className='INputDiv' name="username" placeholder="Enter username" onChange={usernameHandler}/>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw" onChange={passwordHandler}
            minLength={4} maxLength={20}
          />
          <input className='INputDiv' type="text" name="number" placeholder="Enter your number" onChange={numberHandler} maxLength={10} minLength={10} />
          <button className="SignUpBUtton" onClick={SignUpButtonHandler}>Sign Up</button> 
          <p className="LoginSignUpLink" onClick={Loginhere}> Already have account <b > LoginHere</b></p>
         </div>
      </Modal>
    </div>
  )
}