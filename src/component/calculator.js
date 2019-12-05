import React from "react";

import Display from "./display";
import Keypad from "./keypad";
import History from "./history";

const Calculator = props => {
  return (
    <>
      <Display />
      <History />
      <Keypad />
    </>
  );
};

export default Calculator;
