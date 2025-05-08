import React from 'react'

const login = () => {
  return (
    <div>
      <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-red-600'>
        <form action="" className='flex flex-col items-center justify-center'>
            <input className=' text-xl text-black outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter Your Email' />
            <input className=' text-xl text-black outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-white mt-6' type="password" placeholder='Enter Your password' />
            <button className=' text-xl text-white outline-none border-none bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default login
