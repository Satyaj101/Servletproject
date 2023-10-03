import React from "react";
import './login.css';
import image from './ww.png'

function Login(){
    return(
        <>
        <img src={image}alt="logo"></img>
        <br></br>
        <span className="cutm">Centurion University</span>
        <div className="wrapper">
            <div className="input-data">
                  
                <input type="text" required></input><label>Name</label>
           
               
            </div>
        
        
        </div>
        <br></br>
        <div className="wrapper">
            <div className="input-data">
                  
                <input type="password" required></input><label>Password</label>
           
               
            </div>
        
        
        </div>
        <br></br>
        <div className="lgnbtn">
            <button>Login</button>
        </div>
        <br></br><br></br><br></br>
        <div className="res">
      <span>Don't have an account ?</span>  <a href="">register</a>
        </div>
        
        </>

    );
}
export default Login;