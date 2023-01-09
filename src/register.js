import axios from 'axios'
import react, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'
function Register(){
    let [user,setuser]=useState({name:'',password:''})
    let [con,setcon]=useState('')
    let navigate=useNavigate()
    async function submit(){
       if(user.password===con){
        let request=await axios.post('http://localhost:3000/register',user)
        console.log(request)
        if(request.data.masseage=='completed'){
            navigate('/login')
        }
       }
    }
    return(
        <div id='main'>
            <div id='sec'>
                <h1>Member Login</h1>
            <div>    <input placeholder='username' onChange={(e)=>setuser({...user,name:e.target.value})}></input></div>
              <div>  <input placeholder='Password' onChange={(e)=>setuser({...user,password:e.target.value})}></input></div>
              <div><input placeholder='Conformpassword' onChange={(e)=>setcon((e.target.value))}></input><br></br>
              {user.password==con?<></>:<span>password is not match</span>}
              </div>
             <div>   <button onClick={submit}>Register</button></div>
           <Link to='/login'>  <span>Register already...</span></Link>
            </div>
        </div>
    )
}
export default Register