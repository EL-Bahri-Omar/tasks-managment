import React from "react";

function DeleteTask({ deleteTaskRef, task, hideDelete }) {

  const deleteTask = (e) => {
    e.preventDefault();
    deleteTaskRef(task);
  };

  return (
    <section className="taskDelete">
      <form onSubmit={deleteTask}>
        <div className="card border-danger">
        <div className="card-header bg-danger text-white">
          <h5>Confirmation de suppression</h5>
        </div>
        <div className="card-body">
          <p>
            Êtes-vous sûr de vouloir supprimer la tâche :
            <br/><strong> {task.task}</strong> ?
          </p>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-danger me-2">Supprimer</button>
          <button type="button" className="btn btn-secondary" onClick={hideDelete}>Annuler</button>
        </div>
      </div>
      </form>
    </section>
  );
}

export default DeleteTask;
