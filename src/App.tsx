import React from 'react';
import './App.scss';
import { store } from './store';
import { observer } from 'mobx-react-lite';
import ToDo from './components/ToDo';
import AddToDo from './components/AddToDo';

const App = observer(() => {
  const [filter, setFilter] = React.useState('all');

  return (
    <div className='App'>
      <div className='header__container'>
        <h2>ToDo list:</h2>
        <div>
          filter:
          <select
            name=''
            id=''
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='notcompleted'>Not completed</option>
          </select>
        </div>
      </div>
      <div className='todos__container'>
        {store
          .getAllTasks()
          .filter((el) => {
            if (filter === 'completed') {
              return el.isCompleted;
            } else if (filter === 'notcompleted') {
              return !el.isCompleted;
            } else {
              return true;
            }
          })
          .map((el) => {
            return (
              <ToDo
                id={el.id}
                title={el.title}
                text={el.text}
                isCompleted={el.isCompleted}
                key={el.id + el.title}
              />
            );
          })}
      </div>
      <div>
        <AddToDo />
      </div>
    </div>
  );
});

export default App;
