import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { useEffect } from 'react';
function Facebook() {
    const { actions } = useContext(Context)
    const [isLoggedIn] = useState(false)
    useEffect(() =>{
        actions.GetFacebookData()
    }, [actions])
    const responseFacebook = (response) =>{
       
        console.log(response)
        actions.SaveData(response)
      }
    let fbContent;
    if (isLoggedIn) {
        fbContent = null;
    }
    else {
        fbContent = (
            <FacebookLogin
                appId="275064370612975"
                autoLoad={false}
                fields="name, email, picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                textButton=' Facebook'
            >
            </FacebookLogin>
        );
    }
    return <div>{fbContent}</div>
}
export default Facebook