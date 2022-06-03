import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

// import Login from './login';

//const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';


function Continue_with_google() {
    const onSuccess = (res) => {
        console.log('[Login Success] current user:', res);
        axios({
            method:"POST",
            url:"https://localhost:5000/api/googlelogin",
            data:{tokenId:res.tokenId}
        }).then(res =>{
            console.log("Google Login Success"+res);
        })
    };
    const onfailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
    
        <div className='Continue_with_google'>
        <GoogleLogin
        clientId="465241256878-8ahqbash4e36lrmp714igck6p4tiv6g8.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onfailure}
        cookiePolicy={'single_host_origin'}
    />
    </div>

    );
}