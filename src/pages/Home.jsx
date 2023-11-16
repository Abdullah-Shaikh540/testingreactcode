import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
     
        <li>
          <Link to="/gaslurlandingpage">Gaslurlandingpage</Link>
        </li>
      
    </div>
  );
};
export default Home;
