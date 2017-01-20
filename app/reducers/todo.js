const stateTodo = {
  todoLists: [],
  sortByStatus: 'All',
}
const todoApp = (state = stateTodo, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todoLists: state.todoLists.concat([action.todo]),
      }
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todoLists: state.todoLists.filter(todo => todo.id !== action.id),
      }
    }
    case 'UPDATE_TODO_STATUS': {
      return {
        ...state,
        todoLists: state.todoLists.map((todo) => {
          if (todo.id === action.id) {
            todo.status = `${action.status === 'Active' ? 'Completed' : 'Active'}`
          }
          return todo;
        }),
      }
    }
    case 'SORT_TODO_BY_STATUS': {
      return {
        ...state,
        sortByStatus: action.status,
      }
    }
    default: {
      return state;
    }
  }
};

export default todoApp;

