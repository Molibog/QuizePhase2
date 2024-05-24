import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Card() {
  // const { id } = useParams();
  // const [question, setQuestion] = useState([]);
  const [question, setQuest] = useState({});
  // async function fetchData() {
  //   const s = await fetch(`/api/question/${currentTheme}`);
  //   const r = await s.json();
  //   setQuestion(r.data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { themeId, questionId } = useParams();
  console.log(questionId);
  useEffect(() => {
    fetch(`/api/question/${questionId}`)
      .then((res) => res.json())
      .then((data) => setQuest(data.question));
  }, [themeId, questionId]);

  console.log(question);
  return (
    <>
      <div>
        <h1>{question.title}</h1>

        <Link to={`/theme/${themeId}/question/${question.id + 1}`}>
          xzfcvhbjnkm.,
        </Link>
      </div>
    </>
  );
}

export default Card;
