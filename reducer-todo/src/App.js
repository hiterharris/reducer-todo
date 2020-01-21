import React, {useReducer, useState} from 'react';
import Todo from './components/Todo';
import TodoReducer from './reducers/reducers';
import {initialState} from './reducers/reducers';
import data from './data';
import './App.css';


const App = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const [newNote, setNewNote] = useState({});

  const handleChanges = e => {
    setNewNote(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", payload: newNote });
    setNewNote({todo: ''});
}

const handleClear = e => {
  e.preventDefault();
  dispatch({ type: "REMOVE", payload: newNote })
}

  return (
    <div className="App">
      <form>
        <input
          type='text'
          name='name'
          onChange={handleChanges}
          value={newNote.todo}
        />
        <button onClick={handleSubmit}>Add Note</button>
        <button onClick={handleClear}>Clear</button>

      </form>
      <div className='list'>
        {state.map(item => {
            return <Todo key={state.id} item={item} dispatch={dispatch} state={state}/>;
          })}
      </div>
    </div>
  );
}

export default App;
