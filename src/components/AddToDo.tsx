import React, { useEffect } from 'react';
import { store } from '../store';
type Props = {};

const AddToDo = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [activeButton, setActiveButton] = React.useState(true);

  useEffect(() => {
    if (title !== '' && text !== '') {
      setActiveButton(false);
    } else {
      setActiveButton(true);
    }
  }, [title, text]);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        Open/Close add new task form
      </button>
      {isOpen ? (
        <>
          <div>
            <input
              type='text'
              placeholder='ToDo Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type='text'
              placeholder='ToDo Text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              store.addNewTask(title, text);
              setTitle('');
              setText('');
              setIsOpen(false);
            }}
            disabled={activeButton}
          >
            Add Task
          </button>
        </>
      ) : null}
    </>
  );
};

export default AddToDo;
