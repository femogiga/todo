
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const[value,setValue] = useState("All")

const callback = (val)=>{
  setValue(val)
 
}



  return (

    <div>
      <Header callback={callback}/>
      <Main linKVal = {value}/>


    </div>


  )
}

export default App
