function UserTasks({ tasks, onDeleteTask }){

    function handleDelete(id){
        fetch(`http://localhost:9291/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(deleted => onDeleteTask(deleted))
    }
    
    return(
        <div>
            {tasks.map((t) =>
            <p key={t.id}>{t.desc} <button onClick={(e) => handleDelete(t.id)}>x</button></p>
            )}
        </div>
    )
}

export default UserTasks;