import React from "react";
import "../css/media_queries.css";

const MediaQueries = () => {
  return (
    <div className="media_queries body">
      <p>Adaptar-se a 5 tamanhos</p>
      <ul>
        <li>Smart Phones</li>
        <li>Tablets</li>
        <li>Tamanho médio</li>
        <li>Tamanho largo</li>
        <li>Tamanho super Largos</li>
      </ul>
    </div>
  );
};

export default MediaQueries;
