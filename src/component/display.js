import React from "react";
import { connect } from "react-redux";
import { FormControl } from "react-bootstrap";

const Display = ({ formula, dispatch }) => {
  const displayer = e => {
    dispatch({ type: "INPUT", value: e.target.value, formula: "" });
  };

  return <FormControl onFocus={e => displayer(e)} value={formula} />;
};

export default connect(state => {
  return state;
})(Display);
