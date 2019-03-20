import { UPDATE_TITLE, ADD_ITEM, TOGGLE_TODO } from '../actions';

const initialState = {
  listBox: [
    {
      title: 'My New List',
      items: [
        {
          id:999,
          text: 'Join Wunderlist 2.0',
          date: Date.now(),
          completed: true,
          userId: '',
        },
        {
          id: 998,
          text: 'Create a new list',
          date: Date.now(),
          completed: true,
          userId: '',
        },
        {
          id: 997,
          text: 'Repeat',
          date: Date.now(),
          completed: false,
          userId: '',
        }
      ]
    }
  ]

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };

    case ADD_ITEM:
      const newItem = {
        id: Date.now(),
        text: action.payload,
        date: Date.now(),
        completed: false,
        userId: '',
      };
      return {
        ...state,
        items: [...state.items, newItem]
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
