import UserTasks from "./UserTasks";

function UserCard({ user, onDeleteTask, onDeleteUser }){

    function handleDelete(){
        fetch(`http://localhost:9291/users/${user.id}`,{
            method: 'DELETE'
        })
        .then(r => r.json())
        .then((deleted) => onDeleteUser(deleted))
    }

    return(
        <div>
            <img src={user.img_url} alt="profile image" />
            <h2>{user.name} <button onClick={handleDelete}>❌</button></h2>
            <UserTasks tasks={user.tasks} onDeleteTask={onDeleteTask} />
            
        </div>
    )
}

export default UserCard;