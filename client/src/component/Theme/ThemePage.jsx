import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function Theme({ themes, currentTheme, setCurrentTheme }) {
  return (
    <>
      <div>
        <div>
          {themes.map((theme) => (
            <Link to={`/theme/${theme.id}/question/${theme.Questions[0].id}`}>
              {theme.title}
            </Link>
          ))}
          {/* <button >Мультфильмы</button>
      <button>Фильмы</button> */}
        </div>
      </div>
    </>
  );
}

export default Theme;
