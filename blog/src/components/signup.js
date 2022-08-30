import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupBtn = () => {
const btnstyle = {
    borderRadius: '5px',
}
  return (
    <button sx={btnstyle}>
      Sign-Up
    </button>
  );
};

export default SignupBtn;