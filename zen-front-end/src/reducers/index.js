import { UPDATE_TITLE, ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  listBox: [],
  title: 'My New List',
  todos: [
    { id:999, task: 'Join Wunderlist 2.0', completed: true },
    { id: 998, task: 'Create a new list', completed: false },
    { id: 997, task: 'Repeat', completed: false }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };

    case ADD_TODO:
      const newTodo = {
        text: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

      case TOGGLE_TODO:
        return{
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          })
        };
    default:
      return state;
  }
};

export default reducer;
