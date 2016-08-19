import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {CREATE_TODO} from "../constants";

class CreateTodoForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    name: "",
  }

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: CREATE_TODO,
      todo: {name: this.state.name},
    });
    this.setState({name: ""});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}/>
        <button type="submit">Создать</button>
      </form>
    );
  }
}


export default connect()(CreateTodoForm);
