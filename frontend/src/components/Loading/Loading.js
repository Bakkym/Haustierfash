import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    /* Animation loader */
    <div className="loading-container">
      <div class="loading">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  );
}
