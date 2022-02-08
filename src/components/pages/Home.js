import React from "react";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }} className="component-routes">
      <div className = "home-links"> 
      <div className="card" href="/calendar">
        <div className="container">
          <h4>
          <a href="/calendar">Calendar Optimization</a>
          </h4>
        </div>
      </div>
      <div className="card" href="/visualization">
        <div className="container">
          <h4>
          <a href="/visualization">Post Event Analysis</a>
          </h4>
        </div>
      </div>
      </div>
    </div>
  );
}
