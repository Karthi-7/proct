import React,{useState,useEffect} from 'react';
import logo from './../../assets/ilogo.jpeg';
import human from './../../assets/human.svg';
import { CommonInput, CtaButton, WebcamCapture } from '../../components';
import './register.css';

const inputField = [ 'Email ID', 'Full Name', 'Password' ];


const Register = () => {
	const [data , setData]=useState({
		fullName:"",email:"",hash_password:"",profilePicture:""

	})

	const handleChange=(e)=>{
    const {name,value}=e.target;
     setData((prev)=>{
      return {
        ...prev,[name]:value
      }
     })
	 
  }
	const handlePostData=()=>{
		fetch('http://localhost:7000/api/register', {
               method: 'POST',
			   mode: 'cors', 
              body: JSON.stringify({
				data
         
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

 
})
console.log(data)

	}
	
	return (
		<div className="user-register">
			<div className="logo">
				<img src={logo} alt="aankh-logo" />
			</div>
			<div className="register-form">
				<h1 className="title-heading">Sign up</h1>
				<div className="input-fields">
					<input type="text" name="fullName" placeholder='FullName' onChange={handleChange}  style={{border:"1px solid orange"}}/>
					<input type="text" name="email" placeholder='Email'  onChange={handleChange} style={{border:"1px solid orange"}}/>
					<input type="text" name="hash_password" placeholder='Password'  onChange={handleChange} style={{border:"1px solid orange"}}/>
				</div>
				<div className="image-capture">
					<img src={human} alt="human-outline" />
					<WebcamCapture />
				</div>
				<button onClick={handlePostData}  className='signin-btn'>signup</button>
			</div>
		</div>
	);
};

export default Register;
