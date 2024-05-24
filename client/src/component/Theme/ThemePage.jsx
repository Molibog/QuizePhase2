import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../Card/Card';

function Theme({theme,setCurrentTheme}) {

  return (
    <>
      <div>
    {theme.map((el) => {
     return <button onClick={() => setCurrentTheme((current) => current+1)} key={el.id}>{el.title}</button>
    })}
      {/* <button >Мультфильмы</button>
      <button>Фильмы</button> */}
      </div>
    </>
  );
}

export default Theme;
