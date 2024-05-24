import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Card from './component/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path="/"  >
          <Route path="question/:id" element={<Card />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
