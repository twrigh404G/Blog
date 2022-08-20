import React from "react";
import Button from '@mui/material/Button';
import LogoutButton from "./logoutbutton";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';

const ToggleLoginButton = () => {
  const { loginWithRedirect, error, isLoading } = useAuth0();
  
  return <Button color="inherit" onClick={() => loginWithRedirect()}>Log In</Button>;

  
 
  
  
};

export default ToggleLoginButton;