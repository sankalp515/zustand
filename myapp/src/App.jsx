import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseForm from './components/Courseform'
import CourseList from './components/CourseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1 style={{fontSize:"2.5rem", marginBottom:"2rem"}}>My course form</h1>
        <CourseForm/>
        <CourseList/>
      </div>
    </>
  )
}

export default App
