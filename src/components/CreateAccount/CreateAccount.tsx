/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  tipo: "outline" | "field";
  className: any;
  divClassName: any;
}

export const CreateAccount = ({ tipo, className, divClassName }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    tipo: tipo || "outline",
  });

  return (
    <div
      className={`create-account tipo-${state.tipo} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`text-wrapper-2 ${divClassName}`}>Create Account</div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.tipo === "outline") {
    switch (action) {
      case "click":
        return {
          tipo: "field",
        };
    }
  }

  if (state.tipo === "field") {
    switch (action) {
      case "click":
        return {
          tipo: "outline",
        };
    }
  }

  return state;
}

CreateAccount.propTypes = {
  tipo: PropTypes.oneOf(["outline", "field"]),
};
