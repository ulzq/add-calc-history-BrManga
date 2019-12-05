/* with every = operation add the formula and the result as history item  */
import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function History(props) {
  let { replyHistory, deleteHistory } = props;

  const items = props.history;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <span className={"ml-auto"}>
            <button
              onClick={() => replyHistory(index)}
              className={"btn-warning button_gen"}
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </span>
          <span>
            {" "}
            <button
              onClick={() => deleteHistory(index)}
              className={"btn-danger button_gen"}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteHistory: index =>
      dispatch({
        type: "DEL_LINE",
        index: index
      }),
    replyHistory: index => {
      dispatch({
        type: "REP_LINE",
        index: index
      });
    }
  };
};
export default connect(state => {
  return state;
}, mapDispatchToProps)(History);
