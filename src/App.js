import React, { useState } from 'react';
import './css/style.css'; // Globalne style dla html
import './css/body.css'; // Globalne style dla body
import Container from './Container';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  const addNewTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, { content: newTask, done: false }]);
    setNewTask('');
  };

  const removeTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const toggleTaskDone = (taskIndex) => {
    setTasks(
      tasks.map((task, index) =>
        index === taskIndex ? { ...task, done: !task.done } : task
      )
    );
  };

  const markAllTasksDone = () => {
    setTasks(tasks.map((task) => ({ ...task, done: true })));
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.done);

  return (
    <Container>
      <Header />
      <AddTask newTask={newTask} setNewTask={setNewTask} addNewTask={addNewTask} />
      <TaskList
        tasks={filteredTasks}
        removeTask={removeTask}
        toggleTaskDone={toggleTaskDone}
        markAllTasksDone={markAllTasksDone}
        toggleShowCompleted={toggleShowCompleted}
        showCompleted={showCompleted}
        allTasks={tasks}
      />
    </Container>
  );
};

export default App;