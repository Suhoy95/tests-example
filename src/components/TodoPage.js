import React, {PropTypes} from "react";
import {connect} from "react-redux";

function TodoPage({id, name, checked}) {
  return (
    <div>
      <p><strong>Todo</strong>: {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Status</strong>: {checked ? "Archive" : "Active"}</p>
    </div>
  );
}

TodoPage.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

export default connect((state) => state.currentTodo)(TodoPage);
