import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu-bar">
      <ul>
        <li>
          <a href="/">
            H
          </a>
        </li>
        <li>
          <a href="/visualization">V</a>
        </li>
        <li>
          <a href="/calendar">C</a>
        </li>
      </ul>
    </div>
  );
}
