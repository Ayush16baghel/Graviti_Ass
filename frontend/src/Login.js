import React,{useState} from 'react'
import { Link, useNavigate }  from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import './Login.css'



function Login() {
    const [values, setValues] = useState(
       {email:'',
       password:''} 
    );
    const navigate = useNavigate();
    const [errors, setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
 
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res=>{
                    if(res.data === "Success"){
                        
                        navigate ('/home');
                    }
                    else{
                        alert("No record exist");
                    }
                })
                .catch(err => console.log(err));
        }
    }

  return (
    <div className='outer-box'>
        <div className='inner-box'>
            <header class ="signin-header">
        <h2>Sign In</h2>
        </header>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password" >Password</label>
                <input type="password" name='password' placeholder='Enter Password' onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit'  className='btn'> <strong > Log In</strong></button>
            <p>If you don't have an Account Create Account</p>
            <Link to="/signup" className='btn1'><strong>Create Account</strong></Link>
        </form>
        </div>
    </div>
  )
}

export default Login