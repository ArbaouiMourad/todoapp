import React, { Component } from "react";
import { connect } from "react-redux";
import { actionAdd } from "../js/actions/index";



class Add extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleAdd = e => {
    e.preventDefault();
    this.props.addTask({
      id: Date.now(),
      title: this.state.task,
      isCompleted: false
    });
    this.setState({
      task: ""
    });
  };
  render() {
    return (
      <div>
        <h1> Daily Todo Lists!</h1>

        <div className="header">
          <input
            type="text"
            name="task"
            value={this.state.task}
            placeholder=" Add Your Todo"
            onChange={event => {
              this.setState({
                task: event.target.value
              });
            }}
          />
          <button onClick={e => this.handleAdd(e)}>+</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addTask: x => dispatch(actionAdd(x))
});

export default connect(
  null,
  mapDispatchToProps
)(Add);
