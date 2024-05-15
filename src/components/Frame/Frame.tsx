/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconoGoogle } from "../IconoGoogle";
import "./style.css";

interface Props {
  className: any;
  iconoGoogleIconoGoogle: string;
  divClassName: any;
}

export const Frame = ({
  className,
  iconoGoogleIconoGoogle = "/img/icono-google.png",
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`frame ${className}`}>
      <IconoGoogle className="icono-google-instance" iconoGoogle={iconoGoogleIconoGoogle} />
      <div className={`text-wrapper ${divClassName}`}>Continue with Google</div>
    </div>
  );
};

Frame.propTypes = {
  iconoGoogleIconoGoogle: PropTypes.string,
};
