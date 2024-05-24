import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Card() {
  const { id } = useParams();
  

  useEffect(() => {
    fetch(`/api/question/${id}`)
    .then((res) => {
        res.json()
    })
    .catch();
  });

  return (
    <>
      <div>{id}</div>
    </>
  );
}

export default Card;
