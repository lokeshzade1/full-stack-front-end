import { useState } from "react"
import axios from 'axios'
import './login.css'
import  { BrowserRouter,Link, useNavigate } from 'react-router-dom'

function Login(){
    let [login,setlogin]=useState({name:'',password:''})
    let navigate=useNavigate()
    console.log(login)
   async function submit(){
    let request=await axios.get('http://localhost:3000/',login)
    console.log(request.data)
    if(request.data){
        navigate('/todo')
    }
    }
    return(
<div id='mainl'>
            <div id='secl'>
                <h1>Member Register</h1>
            <div>    <input placeholder='username' onChange={(e)=>setlogin({...login,name:e.target.value})}></input></div>
              <div>  <input placeholder='Password' onChange={(e)=>setlogin({...login,password:e.target.value})}></input></div>
             <div>   <button onClick={submit}>Login</button></div>
             {/* <BrowserRouter></BrowserRouter> */}
            <div>
            <Link  to='/register' >    <span>Register your name</span></Link>
            </div>
            </div>
        </div>
    )
}
export default Login