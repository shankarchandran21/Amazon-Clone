import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
        const navigate =useNavigate()
 
const signIn = e=>{
    e.preventDefault();
}

const register = e=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        console.log(auth)
        navigate('/')
    }).catch(err=>alert(err.message))

}

  return (
    <div className='login'>
        <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type="text" name='email' value={email} onChange={e=>setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" name='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type='submit' onChange={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                  By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
            </p>
            <button onClick={register} className='login__registerButton'>Create your amazon account</button>
        </div>
    </div>
  )
}

export default Login