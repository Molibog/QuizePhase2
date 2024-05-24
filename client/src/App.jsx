import { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import ThemePage from "./component/Theme/ThemePage";
import Card from "./component/Card/Card";

function App() {
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {
    fetch(`/api/theme`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThemes(data);
      })
      .catch();
  }, []);
  console.log(themes);
  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            path="/theme"
            element={
              <ThemePage
                themes={themes}
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
            }
          />
          <Route
            path="/theme/:themeId/question/:questionId"
            element={<Card />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
