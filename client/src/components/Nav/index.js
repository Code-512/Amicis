import React from "react";
import { Link } from "react-router-dom";

function Nav() {
 return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     <a className="navbar-brand" href="/">
       TripAround V2.0
     </a>
     <div>
       <ul className="navbar-nav">
         <li className="nav-item">
           <Link
             to="/"
             className={
               window.location.pathname === "/" || window.location.pathname === "/"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
             About
           </Link>
         </li>
         <li className="nav-item">
           <Link
             to="/plan"
             className={window.location.pathname === "/plan" ? "nav-link active" : "nav-link"}
           >
             Plan
           </Link>
         </li>
         <li className="nav-item">
           <Link
             to="/login"
             className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
           >
             Login
           </Link>
         </li>
       </ul>
     </div>
   </nav>
 );
}

export default Nav;