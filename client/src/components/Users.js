import UserCard from "./UserCard";


function Users({ users, onDeleteTask, onDeleteUser }){

    const usersDisplay = users.map((user) => {
    <UserCard user={user} 
        key={user.id} 
        onDeleteTask={onDeleteTask} 
        onDeleteUser={onDeleteUser} />
    
        )
    
    return(
        <div>
            {usersDisplay}
        </div>
    )
}

export default Users;