export const initialState = [];

const TodoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        const newTodo = {
          todo: action.payload,
          completed: false,
          id: Date.now()
      }
        return [...state, newTodo];
    case "COMPLETED":
      return state.map(e => e.id === action.id ? { ...e, completed: !e.completed } : e);
    case "REMOVE":
      return state.filter(e => !e.completed);
      default:
        return state;
    }
  }

  export default TodoReducer;
  