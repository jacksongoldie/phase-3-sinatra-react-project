import Button from 'react-bootstrap/Button';

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
            <p key={t.id}>{t.desc} <Button variant="outline-warning" onClick={(e) => handleDelete(t.id)}>x</Button></p>
            )}
        </div>
    )
}

export default UserTasks;