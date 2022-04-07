
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import bgimg from './login.png';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from './api/axios'
import AuthContext from "./context/Auth-Provider"
function Login (){

  //login api integration
  const {setAuth} = useContext(AuthContext);
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const history = useHistory();
  useEffect(()=> {
    if (localStorage.getItem('user-info')){
      history.push('/add')
    }
  }, [])

  async function login()
  {
    console.warn(email,password)
    let item={email,password};
    let result= await fetch("http://localhost:8000/api/login",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":'application/json',
           }, 
        body:JSON.stringify(item)
      });

      result = await result.json();
      localStorage.setItem("user-info",JSON.stringify(result))
      history.push("/add")
        
  }
  /*const login = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login",
      JSON.stringify({email,password}),
        {
          headers:{'Content-Type: ': 'application/json'},
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken =response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({email, password, roles, accessToken});
      setEmail('');
      setPassword('');
    }
    catch(err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }*/
  }


  return (
    <div className='main'>  
        <form className='login-form'>
            <h1 >log in to continue</h1>
            <input type='text' className='username' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='password' placeholder='Password'/>
            <button onClick={login} className='button'>Log in > </button>
            <text className='register'>No account yet? <Link to="/Register" style={{ color:'white' }}>Register here</Link></text>
            <text className='trouble'>Trouble signing in? <Link to="/trouble_sigin_in" style={{ color:'white' }}>Click here</Link></text>
            
        </form>  
        <img className='bg' src={bgimg}/>
    </div> 
  )
}

export default Login



