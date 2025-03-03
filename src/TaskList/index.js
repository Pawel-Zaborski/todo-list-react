import React from 'react';
import TaskItem from '../TaskItem';
import './taskList.css';

const TaskList = ({
  tasks,
  removeTask,
  toggleTaskDone,
  markAllTasksDone,
  toggleShowCompleted,
  showCompleted,
  allTasks,
}) => {
  return (
    <>
      <div className="container__titles">
        <h3>Lista zadań</h3>
        <button
          className="js-markAllDone"
          onClick={markAllTasksDone}
          disabled={allTasks.length > 0 && allTasks.every((task) => task.done)}
        >
          Ukończ wszystkie
        </button>
        <button className="js-toggleShowCompleted" onClick={toggleShowCompleted}>
          {showCompleted ? 'Ukryj ukończone' : 'Pokaż ukończone'}
        </button>
      </div>
      <div className="container__tasks">
        <ul className="js-tasks">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;