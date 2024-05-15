"use client";
import React from "react";
import { BotonRecuerdame } from "../../components/BotonRecuerdame";
import { ContinueWithGoogle } from "../../components/ContinueWithGoogle";
import { CreateAccount } from "../../components/CreateAccount";
import { EmailVacio } from "../../components/EmailVacio";
import { ForgotPassword } from "../../components/ForgotPassword";
import { Password } from "../../components/Password";
import "../../styles/registerpage.css";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="vector-wrapper">
              <img className="vector" alt="Vector" src="/images/vector.svg" />
            </div>
            <div className="group-wrapper">
              <div className="group-2" />
            </div>
            <div className="img-wrapper">
              <img className="group-3" alt="Group" src="/images/group.png" />
            </div>
          </div>
          <div className="overlap-group">
            <div className="text-wrapper-4">Register Now</div>
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
                  tipo="field"
                />
                <div className="text-wrapper-5">or</div>
                <EmailVacio
                  className="email-vacio-instance"
                  emailWrapperEmailClassName="email-3"
                  emailWrapperEmailDivClassName="email-2"
                />
                <Password
                  className="password-instance"
                  divClassName="design-component-instance-node-2"
                  tipo="sin-clave"
                />
                <div className="create-account-wrapper">
                  <CreateAccount className="create-account-instance" divClassName="create-account-2" tipo="outline" />
                </div>
                <div className="frame-2">
                  <div className="recuerdame-y-olvidar">
                    <BotonRecuerdame
                      className="boton-recuerdame-instance"
                      divClassName="boton-recuerdame-2"
                      tipo="desactivado"
                    />
                    <ForgotPassword divClassName="forgot-password-instance" />
                  </div>
                  <p className="you-already-have">
                    <span className="span">You already have account?</span>
                    <span className="text-wrapper-6"> Log in</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-2">
              <div className="wa-ong">Wa&nbsp;&nbsp;&nbsp;&nbsp;ong</div>
              <img className="screenshot-5" alt="Screenshot" src="/images/screenshot-2024-05-03-at-18-30-1.png" />
            </div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-7">Home</div>
            <div className="text-wrapper-8">About us</div>
            <div className="text-wrapper-9">Our Service</div>
            <div className="text-wrapper-10">Contact us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;