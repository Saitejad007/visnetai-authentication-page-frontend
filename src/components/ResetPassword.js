import React from 'react'
import './index.css'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

const ResetPassword = () => {
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
            <iframe src="https://embed.lottiefiles.com/animation/75971" title='login animation' className='animation'></iframe>
        </motion.div>
        <div className='form-container'>
            <div className='logo-container'>
                <img src='https://visnetai.co/_nuxt/image/5feac0.svg' alt='logo' className='logo'/>
            </div>
            <form onSubmit={submitLogin} className='form'>
                <h1 className='heading'>Forgot password?</h1>
                <p className='description'>Please enter your registered email address.</p>
                <p className='description'>We'll send instructions to help reset your password.</p>
                <div className="inputbox">
                    <input
                    type="text"
                    required="required"
                    />
                    <span>Email</span>
                </div>

                <button className='login-button'>Send instructions to reset</button>
            </form>
            
        </div>
    </motion.div>
  )
}

export default ResetPassword