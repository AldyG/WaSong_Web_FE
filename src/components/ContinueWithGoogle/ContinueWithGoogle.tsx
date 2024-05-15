/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Frame } from "../Frame";
import "./style.css";

interface Props {
  tipo: "outline" | "field";
  className: any;
  frameFrameClassName: any;
  frameDivClassName: any;
  frameIconoGoogleIconoGoogle: string;
}

export const ContinueWithGoogle = ({
  tipo,
  className,
  frameFrameClassName,
  frameDivClassName,
  frameIconoGoogleIconoGoogle = "/img/icono-google.png",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    tipo: tipo || "field",
  });

  return (
    <div
      className={`continue-with-google ${state.tipo} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <Frame
        className={frameFrameClassName}
        divClassName={frameDivClassName}
        iconoGoogleIconoGoogle={frameIconoGoogleIconoGoogle}
      />
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.tipo === "field") {
    switch (action) {
      case "click":
        return {
          tipo: "outline",
        };
    }
  }

  if (state.tipo === "outline") {
    switch (action) {
      case "click":
        return {
          tipo: "field",
        };
    }
  }

  return state;
}

ContinueWithGoogle.propTypes = {
  tipo: PropTypes.oneOf(["outline", "field"]),
  frameIconoGoogleIconoGoogle: PropTypes.string,
};
