import React, { useState } from 'react';
import { TodoList, TaskType } from './components/TodoList';

function App() {

  const [tasks, setTasks] = useState<Array<TaskType>>([
  ])

  const addNewTask = (title: string) => {
    if (title.length > 0) {
      setTasks([...tasks, { id: tasks.length + 1, title: title, dateCreate: Date.now(), isDone: false }])
    }
  }

  const editTask = (id: number, newTitle: string) => {
    if (newTitle.length > 0) {
      setTasks(
        tasks.map(task => {
          if (task.id === id) {
            task.title = newTitle
          }
          return task
        })
      )
    }
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const checkedTask = (id: number) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone
        }
        return task
      })
    )
  }

  const sortByName = () => {
    setTasks([...tasks.sort((a, b) => a.title > b.title ? 1 : -1)])
  }

  const sortByDate = () => {
    setTasks([...tasks.sort((a, b) => a.dateCreate > b.dateCreate ? 1 : -1)])
  }

  return (
    <div className="App">
      <TodoList
        title="Todo list"
        tasks={tasks}
        removeTask={removeTask}
        addNewTask={addNewTask}
        editTask={editTask}
        checkedTask={checkedTask}
        sortByName={sortByName}
        sortByDate={sortByDate}
      />
    </div>
  );
}

export default App;
