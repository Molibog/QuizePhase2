import { useEffect, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import ThemePage from './component/Theme/ThemePage'

function App() {
  const [theme, setTheme] = useState([])
  const [currentTheme, setCurrentTheme] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(1)

  useEffect(() => {
    fetch(`/api/theme`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
      setTheme(data)
    })
    .catch();
  }, []);

  return (
    <>
       <Routes>
        <Route path="/"   >
          <Route path="/theme" element={<ThemePage theme={theme} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>} />
          <Route path="/theme/:themeId/question/:questionId" element={<ThemePage theme={theme} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
