import Signup from "../signup/signup"
import React, { useState } from 'react';

export default function Login() {
    const[registered, notregistered] = useState(false)
    const login = () =>{
        return(
            <form className="login_page">
            <div>
                <label>Username</label>
                <input type="text" placeholder="Enter your usernmae"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="text" placeholder="Enter your password"></input>
            </div>
            <div>
                <button>Login</button>
            </div>
            <p>Not registered? No problem signup</p>
            <button>register</button>
        </form>

        )
    }
    const Render = () =>{
        if(!registered){
            return(
                <Signup/>
            )
        }
        else{
            return(
                login()
            )
        }
    }

    return (
        Render()
    )
}