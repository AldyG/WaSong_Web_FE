/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { EmailWrapper } from "../EmailWrapper";
import "./style.css";

interface Props {
  className: any;
  emailWrapperEmailDivClassName: any;
  emailWrapperEmailClassName: any;
}

export const EmailVacio = ({
  className,
  emailWrapperEmailDivClassName,
  emailWrapperEmailClassName,
}: Props): JSX.Element => {
  return (
    <div className={`email-vacio ${className}`}>
      <EmailWrapper
        className={emailWrapperEmailClassName}
        emailDivClassName={emailWrapperEmailDivClassName}
        emailEmailClassName="email-instance"
      />
    </div>
  );
};
