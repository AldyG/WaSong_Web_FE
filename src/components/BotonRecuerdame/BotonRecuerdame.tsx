/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  tipo: "activado" | "desactivado";
  className: any;
  divClassName: any;
}

export const BotonRecuerdame = ({ tipo, className, divClassName }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    tipo: tipo || "desactivado",
  });

  return (
    <div
      className={`boton-recuerdame ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="rectangle-wrapper">
        <div className={`rectangle ${state.tipo}`} />
      </div>
      <p className={`p ${divClassName}`}>Remember me for 30 days</p>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.tipo === "desactivado") {
    switch (action) {
      case "click":
        return {
          tipo: "activado",
        };
    }
  }

  if (state.tipo === "activado") {
    switch (action) {
      case "click":
        return {
          tipo: "desactivado",
        };
    }
  }

  return state;
}

BotonRecuerdame.propTypes = {
  tipo: PropTypes.oneOf(["activado", "desactivado"]),
};
