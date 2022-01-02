import UserCard from "./UserCard";

function Users({ users }){

    const usersDisplay = users.map((user) => <UserCard user={user} key={user.id}/>)
    
    return(
        <div>
            {usersDisplay}
        </div>
    )
}

export default Users;