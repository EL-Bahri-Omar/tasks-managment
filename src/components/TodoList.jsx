
const TodoList = ({ tasks, showEdit, showDelete}) => {
    return (
        
        <section className="tasksList">
            <h2>Liste des taches</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tache</th>
                        <th scope="col">Etat</th>
                        <th scope="col">Editer</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(
                            t => <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.task}</td>
                                <td>{t.taskState}</td>
                                <td><button className="btn btn-success" onClick={() => showEdit(t.id)}>Editer</button></td>
                                <td><button className="btn btn-danger" onClick={() => showDelete(t.id)}>Supprimer</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default TodoList;