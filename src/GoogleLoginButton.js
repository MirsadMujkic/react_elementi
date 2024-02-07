import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const responseGoogle = (response) => {
    console.log(response);
    if (response.error) {
      onFailure(response.error);
    } else {
      onSuccess(response.profileObj);
    }
  };

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};
export default GoogleLoginButton;