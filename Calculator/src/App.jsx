import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const [number, setnumber] = useState('')
  const [display, setdisplay] = useState('')

  const DisplayEle = (e) => {
      setnumber(e.target.value)
  }

  return (
   <>
   <div className='w-full h-screen bg-black'>

   <div>
    <input 
    readOnly
    value={number}
    className="border text-white border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
    type="text" />
   </div>
   <div>
    <button 
    onClick={() => DisplayEle()}
    className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      1</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      2</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      3</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      4</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      5</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      6</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      7</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      8</button>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300">
      9</button>
   </div>
    </div>
   </>
  )
}

export default App
