import {  useState } from "react";
import "../CSS/Signup.css";
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Signup = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [password , setPassword] = useState('')
  const [address , setAddress] = useState('')
  const navigate = useNavigate();

  const handleSignup = async(e) =>{
    e.preventDefault()
try{
  const axiosInstance = axios.create({
    withCredentials: true
  })

  const data = {
    name: name ,
    email: email,
    phone: phone ,
    password: password,
    address: address
  }

 const res = await axiosInstance.post('https://mernbackend-9h6d.onrender.com/api/user/sign' , data)

 if(res.data.status) {
  alert(res.data.message)
navigate('/login')
 }
 else {
  alert(res.data.message)
  navigate('/login')
 }


 setName('')
 setEmail('')
 setPhone('')
 setPassword('')
 setAddress('')

 
 
 
}
catch(e) {
  console.log('Internal Error Occured' , e.name);
}
  }
  return (
    <div className='signup d-flex flex-column  '>
      <div className='signup-form d-flex flex-column justify-content-center align-items-center mt-3'>
        <div className='signup-header'>
          <h5>Signup Here!</h5>
        </div>

        <div className="signup-details d-flex flex-column gap-4 mt-3">
            <input type="text" placeholder=" Name" value={name} onChange={(e)=> setName(e.target.value)} />
            <input type="text" placeholder=" Email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="text" placeholder="Mobile" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <textarea  cols="30" rows="15" placeholder='Enter Address Here' value={address} onChange={(e)=> setAddress(e.target.value)} ></textarea>
            <button  className="btn btn-danger" onClick={handleSignup} >Register</button>
        </div>
        
      <p className="mt-2 "> Already Have an Account? <Link to={'/login'} className="login-link"><span>Login Here!</span></Link> </p>
      </div>

    </div>
  );
};
export default Signup;
