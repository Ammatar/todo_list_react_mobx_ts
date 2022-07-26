import React, { memo } from 'react';
import { iTask, store } from '../store';

const ToDo = ({ id, title, text, isCompleted }: iTask) => {
  return (
    <div className={'todo__container ' + isCompleted}>
      <h4 className='todo__item-title'>{title}</h4>
      <p className='todo__item-long'>{text}</p>
      {/* <p>{id}</p> */}
      <div className='todo__item-short'>
        <input
          type='checkbox'
          name='isCompleted'
          id=''
          checked={isCompleted}
          onChange={() => {
            store.switchCompleted(id);
          }}
        />
      </div>
      <div className='todo__item-short'>
        <button
          onClick={() => {
            store.deleteTask(id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default memo(ToDo);
