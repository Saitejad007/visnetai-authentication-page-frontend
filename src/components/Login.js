import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

const Login = () => {
    const submitLogin = (e)=>{
        e.preventDefault()
    }
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }} className='app-container'>
        <motion.div initial={{ opacity: 0,scale: 0.5}}
                animate={{ opacity: 1,scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }} className='animation-container'>
            <img src='/graph (1).png' alt='bg-img' className='bg'/>
            <img src='/graph (2).png' alt='bg-img2'className='bg-2'/>
            <iframe src="https://embed.lottiefiles.com/animation/78126" title='login animation' className='animation'></iframe>
        </motion.div>
        <motion.div initial={{ opacity: 0,x: -200}}
                animate={{ opacity: 1,x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }} className='form-container'>
            <div className='logo-container'>
                <img src='https://visnetai.co/_nuxt/image/5feac0.svg' alt='logo' className='logo'/>
            </div>
            <form onSubmit={submitLogin} className='form'>
                <h1 className='heading'>Sign in</h1>
                <p className='description'>Login to manage your account</p>
                <div className="inputbox">
                    <input
                    type="text"
                    required="required"
                    />
                    <span>Username</span>
                </div>
                <div className="inputbox">
                    <input
                    type="password"
                    required="required"
                    />
                    <span>Password</span>
                </div>
                <div className='checkbox-container'>
                    <input type='checkbox' className='checkbox'/>
                    <span className='span-element'>Remember Me</span>
                </div>
                <button className='login-button'>Sign in</button>
            </form>
            <div className='additional-links'>
                <p className='description'>Don't have an account? <Link to='/signup' className='link'>Sign up</Link></p>
                <p><Link to='/resetpwd' className='link'>Forgot Password?</Link></p>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Login