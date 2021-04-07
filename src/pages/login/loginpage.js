import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import ReactDOM from 'react-dom'

import axios from '../../axiosConfig'
import ApiClient from '../../api-client'

function LoginPage(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorText, setErrorText] = useState("")

    const onSubmit= ()=>{
        ApiClient.postLogin(username, password)
        .then(res =>{
            console.log(res)
            if(res.status == 200){
                return res.data
            }
            else if(res.status == 400){
                setErrorText("Invalid Username or Password")
            }
        })
        .then(data => {
            console.log(data)
            if(data.success == true){
                console.log("Success")
            }
            else{
                console.log("Fail")
                setErrorText("Invalid Username or Password")
            }
        })
    }
    return (
        <div>
                <label >Username</label>
                <input id="usernameInput" onChange={e => setUsername(e.target.value)} name="username"/> 
                <label >Password</label>
                <input id="passwordInput" type="password" onChange={e => setPassword(e.target.value)} name="password"/> 
                <button onClick={onSubmit}>Login</button> 
                <p>{errorText}</p>
        </div>
    )
}

export default LoginPage