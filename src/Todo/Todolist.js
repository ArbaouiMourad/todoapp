import React from "react";
import { connect } from "react-redux";
import { actionDelete, actionComplete, actionEdit } from "../js/actions/index";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      modItem:""
    };
  }

  render() {
    return (
      <div>
        {this.props.tasks.map((el, i) => (
          <div className="taskCard">
            {/* <input className={el.isCompleted ? "completed" : ""} value={el.title} readOnly/> */}
            <h3 className={el.isCompleted ? "completed" : ""}>{el.title}</h3>
            <div className="actions">
              <button onClick={() => this.props.complete(el.id)}>
                {el.isCompleted ? "Undo" : "complete"}
              </button>
              <button onClick={() => this.props.deleteTask(el.id)}>
                {" "}
                Delete{" "}
              </button>
              <input type="text" value={this.state.modItem} name="modItem" onChange={(e)=>this.setState({modItem:e.target.value})}/>
              <button
                onClick={() =>
                  {this.props.edititem({ id: el.id, title: this.state.modItem }); this.setState({modItem:""})}
                }
              >
                {" "}
                EDIT
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.todo
});

const mapDispatchToProps = dispatch => ({
  complete: x => dispatch(actionComplete(x)),
  deleteTask: x => dispatch(actionDelete(x)),
  edititem: x => dispatch(actionEdit(x))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
