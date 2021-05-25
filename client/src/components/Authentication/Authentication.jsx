import React from "react";
import { Redirect } from 'react-router-dom';


const Authentication = () => (
  !window.location.href.includes('/authentication/signin')
    ? <Redirect
      to={'/authentication/signin/'}
    />
    :
    <Redirect
      to={'/authentication/signup/'}
    />
);

export default Authentication;
