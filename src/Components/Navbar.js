import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileResp, setMobileResp] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="header">Mounika Jakkani</h1>
      <ul className={`nav-links ${mobileResp ? "nav-active" : ""}`}>
        <li className="nav-item">
          <Link to="/">Home</Link>{" "}
        </li>{" "}
        <li className="nav-item">
          <Link to="/About">About</Link>{" "}
        </li>{" "}
        <li className="nav-item">
          <Link to="/Projects">Projects</Link>{" "}
        </li>{" "}
        <li className="nav-item">
          <Link to="/Contact">Contact</Link>{" "}
        </li>
      </ul>
      <span className="nav-toggle" onClick={() => setMobileResp(!mobileResp)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="white"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </span>
    </nav>
  );
};
// const Navbar = () => {
//   const [isNavActive, setIsNavActive] = useState(false);

//   return (
//     <nav className="navbar">
//       <h1 className="header">Mounika Jakkani</h1>

//       <ul className={`nav-links ${isNavActive ? "nav-active" : ""}`}>
//         <li className="nav-item">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/About">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/Projects">Projects</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/Contact">Contact</Link>
//         </li>
//       </ul>

//       <span className="nav-toggle" onClick={() => setIsNavActive(!isNavActive)}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="25"
//           height="25"
//           fill="white"
//           className="bi bi-list"
//           viewBox="0 0 16 16"
//         >
//           <path
//             fillRule="evenodd"
//             d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//           />
//         </svg>
//       </span>
//     </nav>
//   );
// };

export default Navbar;
