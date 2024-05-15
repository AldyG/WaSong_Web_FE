/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
  inputType: string;
}

export const Email = ({ className, divClassName, inputType = "email" }: Props): JSX.Element => {
  return (
    <div className={`email ${className}`}>
      <input className={`div ${divClassName}`} placeholder="Email" type={inputType} />
    </div>
  );
};

Email.propTypes = {
  inputType: PropTypes.string,
};
