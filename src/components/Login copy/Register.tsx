import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./style.css";
import { SessionContext, SessionContextType } from "../Contexts/Context";
import router, { useRouter } from "next/router";

function showPassword() {
	var x = (document.getElementById("User Password") as HTMLInputElement);
	if (x === null) return;
	else {
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	
	}
}

async function handleRegister() {
	var email = (document.getElementById("User Email") as HTMLInputElement);
    var password = (document.getElementById("User Password") as HTMLInputElement);
    
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
    headers.set('Connection', 'keep-alive')

    const req: RequestInfo = new Request('https://c719-114-122-106-87.ngrok-free.app/api/register', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "email":email.value,
            "password":password.value
        })
    })

    const router = useRouter();

    return fetch(req)
        .then(res => {
            return res.status
        })
}

export const Register = (): JSX.Element => {
    return (
        <div className="div" >
            <input className="email" type="email" placeholder="Email" id="User Email" />
            <input className="password" type="password" placeholder="Password" id="User Password" />
            <input className="check" type="checkbox" onClick={showPassword} />
            <span style={{color: "black", marginLeft: "2px", fontSize: "14px"}}>Show Password</span>
            <button className="button" type="button" onClick={handleRegister} >
                <span style={{fontWeight: "bold"}}>Create Account</span>
            </button>
        </div>
    );
};
                   