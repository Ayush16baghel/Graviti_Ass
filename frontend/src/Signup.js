import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import './Signup.css'

export default function Signup() {
    const [values, setValues] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    );
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
   
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
      
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(navigate('/'))
                .catch(err => console.log(err));
        }
    }
    return (
        <div className='outer-box'>
            <div className='inner-box'>
                <header class="signin-header">
                <h2>Sign Up</h2>
                </header>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter Name' onChange={handleInput} name='name' className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' onChange={handleInput} name='email' className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="tele">Mobile No.</label>
                        <input type="tel" placeholder='Your Mob. No.' onChange={handleInput} name='tele' className='form-control rounded-0' />
                        {errors.tele && <span className='text-danger'>{errors.tele}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="date">Date of Birth</label>
                        <input type="date" placeholder='dob' onChange={handleInput} name='tele' className='form-control rounded-0' />
                        {errors.date && <span className='text-danger'>{errors.date}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' onChange={handleInput} name='password' className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn'><strong>Signup</strong></button>
                    <p>Already have an Account || then login</p>
                    <Link to="/" className='btn1'><strong>Login</strong></Link>
                </form>
            </div>
        </div>
    )
}
