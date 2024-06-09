"use client";
import React from "react";
import { ContinueWithGoogle } from "../../components/ContinueWithGoogle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "../../styles/registerpage.css";
import { Register } from "@/components/Register";

const RegisterPage = () => {
	return (
		<div className="register-page">
			<div className="overlap-wrapper">
				<div className="overlap">
					<div className="overlap-group">
						<div className="text-wrapper-4">Register</div>
						<div className="group-4">
						<img className="screenshot" alt="Screenshot" src="/images/screenshot-2024-05-03-at-18-20-1.png" />
						<img className="screenshot-2" alt="Screenshot" src="/images/screenshot-2024-05-03-at-18-20-1.png" />
						<img className="screenshot-3" alt="Screenshot" src="/images/screenshot-2024-05-03-at-18-20-1.png" />
						<img className="screenshot-4" alt="Screenshot" src="/images/screenshot-2024-05-03-at-18-20-1.png" />
						</div>
						<div className="overlap-group-wrapper">
							<div className="overlap-group-2">
								<ContinueWithGoogle
									className="continue-with-google-instance"
									frameDivClassName="design-component-instance-node-2"
									frameFrameClassName="design-component-instance-node"
									frameIconoGoogleIconoGoogle="/images/icono-google-4.png"
									tipo="field" />
								<div className="text-wrapper-5">or</div>
								<Register />
								<input type="checkbox" style={{
									display: "inline-block",
									alignItems: "center",
									marginTop: "30px",
									marginLeft: "150.5px",
									marginRight: "auto",
								}} />
								<span style={{color: "black", marginLeft: "5px", fontSize: "14px"}}>Remember me for 30 days</span>
								<p className="you-already-have">
									<span className="span">You already have an account?</span>
									<a href="/login" className="text-wrapper-6">Log in</a>
								</p>
							</div>
						</div>
					</div>
					<div className="div-wrapper">
						<div className="overlap-2">
							<img alt="Logo" src="/images/wasong-logo.png" />
						</div>
					</div>
					<div className="navbar">
						<a href="/" className="text-wrapper-7">Home</a>
						<div className="text-wrapper-8">About us</div>
						<div className="text-wrapper-9">Our Service</div>
						<div className="text-wrapper-10">Contact us</div>
					</div>
					<div className="group-icons">
						<div className="twitter-wrapper">
							<a href="https://twitter.com/AldyAlexanderss" target="_blank">
								<FontAwesomeIcon icon={faTwitter} color="black" size="2xl"/>
							</a>
						</div>
						<div className="instagram-wrapper">
							<a href="https://instagram.com/aldyganesen" target="_blank">
								<FontAwesomeIcon icon={faInstagram} color="black" size="2xl"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

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

export default RegisterPage;