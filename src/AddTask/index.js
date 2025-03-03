import React from 'react';
import './addTask.css';

const AddTask = ({ newTask, setNewTask, addNewTask }) => {
  return (
    <>
      <div className="container__titles">
        <h3>Dodaj nowe zadanie</h3>
      </div>
      <div className="js-form container__addTask">
        <form onSubmit={addNewTask}>
          <input
            className="js-newTask form__field"
            placeholder="Co jest do zrobienia?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            autoFocus
          />
          <button className="form_button" type="submit">
            Dodaj zadanie
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;