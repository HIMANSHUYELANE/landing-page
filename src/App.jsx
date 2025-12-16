import { useState } from 'react'
import  Home  from "./pages/Home"

function App() {

  return (
    <>
    <nav className='py-7 flex justify-between mx-15'>
      <h1 className='font-bold text-4xl text-cyan-500'>Develop.dev</h1>
      <ul className='flex gap-10 font text-white text-xl'>
      <li className='hover:text-cyan-500 cursor-pointer'>About</li>
      <li className='hover:text-cyan-500 cursor-pointer'>Contact</li>
      <li className='hover:text-cyan-500 cursor-pointer'>Service</li>
      <li className='hover:text-cyan-500 cursor-pointer'>Signin</li>
      <li className='hover:text-cyan-500 cursor-pointer'>Signup</li>
      </ul>
      </nav>         
      <Home />
      </>
  )
}

export default App
