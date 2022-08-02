import React from "react";
import Button from '@mui/material/Button';
import LogoutButton from "./logoutbutton";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';

const ToggleLoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, error, isLoading } = useAuth0();
  if (!isAuthenticated){
    return <Button color="inherit" onClick={() => loginWithRedirect()}>Log In</Button>;
  }
  if(isAuthenticated){
    return <Button color="inherit" onClick={() => logout({returnTo: window.location.origin})}>Logout</Button>
  }
  
};

export default ToggleLoginButton;