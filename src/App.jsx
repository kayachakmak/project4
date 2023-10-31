import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'


function App() {
  const [activities,setActivites] = useState({})
  return (
    <>
      <Form onAddActivity={}/>
    </>
  )
}


export default App
