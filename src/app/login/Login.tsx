"use client";
import React from "react";
import { ContinueWithGoogle } from "@/components/ContinueWithGoogle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "../../styles/loginpage.css";
import { Login } from "@/components/Login";

const LoginPage = () => {
	return (
		<div className="login-page">
			<div className="overlap-wrapper">
				<div className="overlap">
					<div className="overlap-group">
						<div className="text-wrapper-4">Login</div>
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
								<Login />
								<input type="checkbox" style={{
									display: "inline-block",
									alignItems: "center",
									marginTop: "30px",
									marginLeft: "150.5px",
									marginRight: "auto",
								}} />
								<span style={{color: "black", marginLeft: "5px", fontSize: "14px"}}>Remember me for 30 days</span>
							</div>
						</div>
					</div>
					<div className="div-wrapper">
						<div className="overlap-2">
							<img
              				loading="lazy"
              				srcSet="/images/wasong-logo.png"
              				className="shrink-0 max-w-full w-[126px]"
            				/>
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

export default LoginPage;