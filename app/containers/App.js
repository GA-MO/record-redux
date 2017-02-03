
import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// State
function mapStateToProps(state) {
  return {
    todoLists: state.todo.todoLists,
    sortByStatus: state.todo.sortByStatus
  }
}

// Action
const actions = {
  addTodo: (todo) => ({
    type: 'ADD_TODO',
    todo,
  }),
  deleteTodo: (id) => ({
    type: 'DELETE_TODO',
    id,
  }),
  sortTodoStatus: (status) => ({
    type: 'SORT_TODO_BY_STATUS',
    status,
  }),
  updateTodoStatus: (id, status) => ({
    type: 'UPDATE_TODO_STATUS',
    id,
    status,
  })
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  static propTypes = {
    todoLists: React.PropTypes.array,
    sortByStatus: React.PropTypes.string,
  }

  addTodo = (e) => {
    /**
     * If user Enter
     */
    if (e.keyCode === 13 && e.target.value !== '') {
      const newTodo = {
        id: Date.now(),
        label: e.target.value,
        status: 'Active',
      }
      this.props.actions.addTodo(newTodo)
      /**
       * Clear value
       * @type {String}
       */
      e.target.value = '';
    }
  }

  sortTodoStatus = (status) => {
    this.props.actions.sortTodoStatus(status)
  }

  updateTodoStatus = (id, status) => {
    this.props.actions.updateTodoStatus(id, status)
  }

  render() {
    const { todoLists, sortByStatus, actions } = this.props;

    /**
     * Sort Todo list by status
     * @type {Array}
     */
    let todoListBySort = todoLists;
    if (sortByStatus !== 'All') {
      todoListBySort = todoLists.filter((todo) => todo.status === sortByStatus);
    }

    return (
      <div className="container">
        
        <br />
        <br />
        <br />
        <div className="box-todo">
          <div className="box-input">
            <div className="wrap-form-input">
              <input
                onKeyUp={(e) => this.addTodo(e)}
                type="text"
                className="form-input"
                placeholder="What needs to be done?"
              />
            </div>
          </div>
          {
            todoListBySort.map((todo) => <TodoItem todo={todo} deleteTodo={() => actions.deleteTodo(todo.id)} updateTodoStatus={this.updateTodoStatus} />)
          }
          <br />
          <ButtonSortBy sortByStatus={sortByStatus} label="All" onClickButton={this.sortTodoStatus} />
          <ButtonSortBy sortByStatus={sortByStatus} label="Active" onClickButton={this.sortTodoStatus} />
          <ButtonSortBy sortByStatus={sortByStatus} label="Completed" onClickButton={this.sortTodoStatus} />
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}


/**
 * Component button sortby
 * @param  {String} options.sortByStatus
 * @param  {String} options.label
 * @param  {Function} options.onClickButton
 * @return {Component}
 */
const ButtonSortBy = ({ sortByStatus, label, onClickButton}) => {
  return (
    <button
      className={`${sortByStatus === label ? 'button active' : 'button'}`}
      onClick={() => onClickButton(label)}
    >{label}</button>
  )
}

ButtonSortBy.propTypes = {
  sortByStatus: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
}


/**
 * Component todo item
 * @param  {Object} options.todo
 * @param  {Function} options.updateTodoStatus
 * @return {Component}
 */
const TodoItem = ({ todo, updateTodoStatus, deleteTodo }) => {
  return (
    <div className="todo-item">
      <div className="input-checkbox">
        <label>
          <input type="checkbox" name="checkbox" checked={todo.status === 'Completed'} onChange={() => updateTodoStatus(todo.id, todo.status)} />
          <span className="input"></span>
        </label>
      </div>
      {
        todo.status === 'Active'
        ? todo.label
        : <del>{todo.label}</del>
      }
      <div className="delete" onClick={deleteTodo}>✘</div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
}
