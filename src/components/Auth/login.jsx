import React from 'react'
import { useState } from 'react'


const login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const submitHandler = () =>{
    e.preventDefault()
    console.log("Email is: " ,email)
    console.log("Password is: " ,password)
    setEmail("")
    setPassword("")
}

  return (
    <div>
      <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 rounded-xl p-20 '>
        <form onSubmit={(e) =>{
            submitHandler(e)
        } } className='flex flex-col items-center justify-center'>
            <input 
            value ={email}
            onChange={(e) =>{
                setEmail(e.target.value)

            }}
            required className=' text-lg text-black outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter Your Email' />
            <input 
            value ={password}
            onChange={(e) =>{
                setPassword(e.target.value)

            }} required className=' text-lg text-black outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 rounded-full placeholder:text-grey-400 mt-6' type="password" placeholder='Enter Your password' />
            <button className='mt-7 text-lg text-white outline-none border-none bg-emerald-600 py-2 px-8 rounded-full w-full placeholder:text-white'>Log in</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default login
