import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = ({ match }) => {
  return (
    <div>
      <Link to={{ pathname: match.url, search: "?login=true" }}>Login</Link>
    </div>
  );
};

export default ProfilePage;
