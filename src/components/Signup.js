import React from 'react'
import './index.css'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'


const Signup = () => {
    const submitLogin = (e)=>{
        e.preventDefault()
    }
  return (
    <motion.div initial={{ opacity: 0, scale: 0.4 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='app-container'>
        <motion.div initial={{ opacity: 0,scale: 0.5}}
                animate={{ opacity: 1,scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }} className='animation-container'>
            <img src='/graph (1).png' alt='bg-img' className='bg'/>
            <img src='/graph (2).png' alt='bg-img2'className='bg-2'/>
            <iframe src="https://embed.lottiefiles.com/animation/107800" title='signup animation' className='animation'></iframe>
        </motion.div>
        <motion.div initial={{ opacity: 0,x: -200}}
                animate={{ opacity: 1,x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }} className='form-container'>
            <div className='logo-container'>
                <img src='https://visnetai.co/_nuxt/image/5feac0.svg' alt='logo' className='logo'/>
            </div>
            <form onSubmit={submitLogin} className='form'>
                <h1 className='heading'>Create your account</h1>
                <p className='description'>Created for developers by developers</p>
                <div className="inputbox">
                    <input
                    type="text"
                    required="required"
                    />
                    <span>Full Name</span>
                </div>
                <div className="inputbox">
                    <input
                    type="email"
                    required="required"
                    />
                    <span>Email</span>
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
                    <span className='span-element'>I agree to the terms & conditions</span>
                </div>
                <button className='login-button'>Sign up</button>
            </form>
            <div className='additional-links'>
                <p className='description'>Already have an account? <Link to='/' className='link'>Sign in</Link></p>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Signup