import { makeAutoObservable } from 'mobx';

export interface iTask {
  id: number;
  title: string;
  text: string;
  isCompleted: boolean;
}

class Store {
  tasks: iTask[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  getAllTasks() {
    return this.tasks;
  }
  addNewTask(title: string, text: string) {
    const newTask: iTask = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      text: text,
      isCompleted: false,
    };
    this.tasks.push(newTask);
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((el) => (el.id !== id ? el : null));
  }
  switchCompleted(id: number) {
    this.tasks.map((el) => {
      if (el.id !== id) {
        return el;
      } else {
        el.isCompleted = !el.isCompleted;
        return el;
      }
    });
  }
}

export const store = new Store();
