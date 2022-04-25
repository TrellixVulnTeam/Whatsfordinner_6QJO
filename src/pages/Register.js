import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import bgimg from './login.png';
import { Link } from 'react-router-dom';
import './Register.css';
import LoginHeader from "../components/loginHeader";

function Register (){
    //set use state for registerand t&c check box
    const [agree, setAgree] = useState(false);
    const chkbox = () => {
        setAgree(!agree);
    };

  // api integration
    {/*  useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/")
        }
    },[])*/}

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const history=useHistory();
  
//asunc function for registering 
  async function register()
  {
    //check input on console

    let item={email,name,password}
      console.warn(item)


     let result= await fetch("https://cors-anywhere.herokuapp.com/https://api.betterdinner.space/api/register",{
        method:'POST',
         body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json',
           // "X-Requested-With": "XMLHttpRequest" --> dont think  we need this as its not in the header
        }

    });

     result = await result.json();
     console.warn("result",result)
     localStorage.setItem("user-info",JSON.stringify(result))

     //history.push("/add")


  }
  //need to fix the confitm password and this needs to be done usiong react hook / useState
  return (
    <div className='main'>  
        <form className='Register-form'>
            <LoginHeader />
            <h1 >Sign up to Better Dinner</h1>


            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='Email' placeholder='Email address...'/>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='Username' placeholder='Username...'/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='password' placeholder='Password...'/>
            <input type='checkbox' id='agree' onChange={chkbox} className='lable'  />
            <h3 >I agree to the Terms and Conditions</h3>
            <button disabled={!agree} className="button" onClick={register}>
                Sign Up
            </button>             
                
            
      
       </form>  
        <img className='bg' src={bgimg}/>
    </div> 
  )
}

export default Register


