import React, { useState } from 'react';
import './LoginRegist.css';
import { FaUserAlt,FaLock,FaEnvelope } from "react-icons/fa";

const LoginRegist = () => {

    const [action, setAction] = useState('');

    const registLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };
  return (
    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action=''>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Enter Username" required />
                    <FaUserAlt className='icon'/>
                </div>
                <div className="input-box">
                    <input type="Password" placeholder="Enter Password" required />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="regist-link">
                    <p>Don't Have An Account? <a href="#" onClick={registLink}>Register</a></p>
                </div>
            </form>
        </div>


        <div className="form-box regist">
            <form action=''>
                <h1>Regist</h1>
                <div className="input-box">
                    <input type="text" placeholder="Enter Username" required />
                    <FaUserAlt className='icon'/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Enter Email" required />
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input-box">
                    <input type="Password" placeholder="Enter Password" required />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" />I Agree to the Terms and Conditions</label>
                </div>

                <button type="submit">Regist</button>

                <div className="regist-link">
                    <p>Already Have An Account <a href="#" onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
};

export default LoginRegist