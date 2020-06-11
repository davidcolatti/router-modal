import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ match }) => {
  return (
    <div>
      <Link to="/profile">Go To Profile</Link>
      <Link to={{ pathname: match.url, search: "?login=true" }}>Login</Link>
    </div>
  );
};

export default HomePage;
