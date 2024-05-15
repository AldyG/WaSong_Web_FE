/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Email } from "../Email";
import "./style.css";

interface Props {
  className: any;
  emailEmailClassName: any;
  emailDivClassName: any;
}

export const EmailWrapper = ({ className, emailEmailClassName, emailDivClassName }: Props): JSX.Element => {
  return (
    <div className={`email-wrapper ${className}`}>
      <Email className={emailEmailClassName} divClassName={emailDivClassName} />
    </div>
  );
};
