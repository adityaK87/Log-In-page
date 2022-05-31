import React from 'react'
import './log-in-page.css'


const Login = () =>{
    return(
    <div className="container">
        <h1>Log In</h1>
        <div className="box">
            <form action="">
                <label for="email"><i className="fa-solid fa-envelope"></i></label>
                <input type="email" name="email" id="email" placeholder="Enter Your Email" />
            </form>
        </div>
        <div className="box">
            <form action="">
               <label for="password"><i className="fa-solid fa-key"></i></label> 
                <input type="password" name="password" id="password" placeholder="Enter Your Password" />
            </form>
        </div>
        <input type="submit" value="Sign in" />
    </div>
   );
    
} 

export default Login;