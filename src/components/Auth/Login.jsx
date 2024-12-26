import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    
    const [email,setEmail]=useState('');
    const [password,setPssword] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('Submit button clicked');
        handleLogin(email,password)
        setEmail('');
        setPssword('');
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen p-[20px]'>
    <div className='border border-emerald-600 text-center p-[22px] rounded-md  w-full  max-w-md'>

    <h1 className='text-4xl mb-3'>Login</h1>
        <form 
        onSubmit={(e)=>{
            submitHandler(e);
        }}
        className='flex flex-col justify-center items-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
             className='pl-2 mb-4 py-[5px] px-0 w-full rounded outline-none text-black'  type='email' placeholder='Email' required/>
            <input
            value={password}
            onChange={(e)=>{
                setPssword(e.target.value);
            }}
             className='pl-2 mb-4 py-[5px] px-0 w-full rounded outline-none text-black'  type='password' placeholder='Password' required/>
            <button className='border border-emerald-600 w-full text-xl p-[3px] rounded transition-all duration-500 ease-in-out hover:bg-emerald-600' type='submit'>Submit</button>   
        </form>
    </div>
    </div>
  )
}

export default Login
