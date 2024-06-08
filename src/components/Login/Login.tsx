import PropTypes from "prop-types";
import React from "react";
import "./style.css";

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

async function handleLogin() {
	var email = (document.getElementById("User Email") as HTMLInputElement);
    var password = (document.getElementById("User Password") as HTMLInputElement);
    
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
    headers.set('Connection', 'keep-alive')

    const req: RequestInfo = new Request('api/login', {
        method: 'GET',
        headers: headers,
        body: JSON.stringify({
            "email":email.value,
            "password":password.value
        })
    })

    return fetch(req)
        .then(res => {return res.status})
}

export const Login = (): JSX.Element => {
    return (
        <div className={"div"} >
            <input className={"email"} type="email" placeholder="Email" id="User Email" />
            <input className={"password"} type="password" placeholder="Password" id="User Password" />
            <input className={"check"} type="checkbox" onClick={showPassword} />
            <span style={{color: "black", marginLeft: "2px", fontSize: "14px"}}>Show Password</span>
            <button className={"button"} type="button" onClick={handleLogin} >
                <span style={{fontWeight: "bold"}}>Login</span>
            </button>
        </div>
    );
};
                   