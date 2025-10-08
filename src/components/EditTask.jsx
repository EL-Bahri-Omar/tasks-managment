import React, { useState, useEffect } from 'react';

function EditTask({ editTaskRef, task, hideEdit }) {
  const [text, setText] = useState(task.task);
  const [state, setState] = useState(task.taskState);

  useEffect(() => {
    setText(task.task);
    setState(task.taskState);
  }, [task]);

  const editTask = (e) => {
    e.preventDefault();
    editTaskRef({ ...task, task: text, taskState: state });
  };

  return (
    <section className="taskEdit">
      <form onSubmit={editTask}>
        <div className="mb-3">
          <label htmlFor="editTaskInput" className="form-label">Nom de la tâche</label>
          <input
            type="text"
            id="editTaskInput"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editTaskState" className="form-label">État</label>
          <select
            id="editTaskState"
            className="form-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hideEdit}>Annuler</button>
      </form>
    </section>
  );
}

export default EditTask;
