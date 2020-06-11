import React from "react";
import Modal from "../Modal";

const LoginPage = ({ history, location }) => {
  const params = new URLSearchParams(location.search);

  return (
    params.get("login") && (
      <Modal
        onClick={() => {
          history.push(location.pathname);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          I CAN DO WHATEVER IN THIS
        </div>
      </Modal>
    )
  );
};

export default LoginPage;
