const defaultState = {
  formula: "",
  history: []
};

const reducer = (state = defaultState, action) => {
  let result = state,
    { formula, history } = state;
  switch (action.type) {
    case "INPUT":
      if (action.value === "<") {
        formula = formula.substring(0, formula.length - 1);
      } else if (action.value === "=") {
        try {
          var temp1 = "";
          temp1 = formula;
          formula = eval(formula).toString();
          history.push(`${temp1}=${formula}`);
          formula = "";
        } catch (e) {}
      } else {
        formula = formula + action.value;
      }
      result = { ...state, formula: formula };
      break;
    case "DEL_LINE":
      history = [...state.history];
      history.splice(action.index, 1);
      return {
        ...state,
        history: history
      };
    case "REP_LINE":
      formula = history[action.index].split("=")[0];
      return {
        ...state,
        formula: formula
      };
    default:
  }
  return result;
};

export default reducer;
