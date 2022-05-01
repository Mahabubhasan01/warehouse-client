import React from "react";
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-box">
      <figure>
        <div class="dot white"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </figure>
    </div>
  );
};

export default Loading;
