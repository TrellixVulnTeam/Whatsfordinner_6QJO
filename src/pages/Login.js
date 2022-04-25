import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom'
import bgimg from './login.png';
import { Link } from 'react-router-dom';
import './Login.css';
import LoginHeader from "../components/loginHeader";

function Login (){


  //login api integration
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  //const history = useHistory();


  async function login()
  {

      let item={email,password}
      console.warn(item)
        let result= await fetch("https://cors-anywhere.herokuapp.com/https://api.betterdinner.space/api/login",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":'application/json',
               },
            body:JSON.stringify(item)

        });


      result = await result.json();
      console.warn("result",result)
      localStorage.setItem("user-info",JSON.stringify(result))
      //history.push("/add")
        

  }


  return (

    <div className='main'>
        <form className='login-form'>
            <LoginHeader />
            <h1 >log in to continue</h1>
            <input type='text' className='username' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='password' placeholder='Password'/>
            <button onClick={login} className='button'>Log in > </button>
            <text className='register'>No account yet? <Link to="/Register" style={{ color:'white' }}>Register here</Link></text>
            <text className='trouble'>Trouble signing in? <Link to="/trouble_sigin_in" style={{ color:'white' }}>Click here</Link></text>
            
        </form>  
        <img className='bg' src={bgimg}/>
    </div> 
  )
}

export default Login
