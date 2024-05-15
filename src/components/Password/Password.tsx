/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  tipo: "sin-clave" | "con-clave";
  className: any;
  divClassName: any;
}

export const Password = ({ tipo, className, divClassName }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    tipo: tipo || "sin-clave",
  });

  return (
    <div
      className={`password ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`div-2 ${divClassName}`}>
        {state.tipo === "sin-clave" && <>Password</>}

        {state.tipo === "con-clave" && <>*****************</>}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        tipo: "con-clave",
      };
  }

  return state;
}

Password.propTypes = {
  tipo: PropTypes.oneOf(["sin-clave", "con-clave"]),
};
