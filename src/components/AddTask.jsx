import { useState } from "react";

const AddTask = ({addTaskRef}) => {
    const [task, setTAsk] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        addTaskRef(task);
    }

    return (
        <section className="taskAdd hide">
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Tache</label>
                    <input type="text" className="form-control" id="task" placeholder="Entrez le nom du tache" value={task} onChange={(e)=> setTAsk(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </section>
    )
}

export default AddTask;