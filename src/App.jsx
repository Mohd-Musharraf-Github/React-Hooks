import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firsthook from './Components/UseStatess'
import UseContextHook from './Components/UseContext Part 2/UseContextHook'
import Login from './Components/UseContext Part 2/Login'
import Register from './Components/UseContext Part 2/Register'
import UseReducerHook from './Components/UseReducerHook/UseReducerHook'
import UseRef from './Components/Useref/Usearef'
import UseLayoutEffect from './Components/UseLayoutEffect/UseLayoutEffect'
import UseCallback from './Components/UseCallback/UseCallback'
import Counter from './Components/UseEffecttt/UseEffect'
import Car from './Components/UseEffecttt/UseEffect'



function App() {

  return (
    <>
    <div>

      {/* <UseRef/> */}
      {/* <UseReducerHook/> */}
      <Car/>

      {/* <UseContextHook/>
      <Login/>
      <Register/> */}
    
      {/* <Firsthook/> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseCallback/> */}
    </div>
    </>
  )
}

export default App
