import Users from "./Users";

function Container({ users, onDeleteTask, onDeleteUser }) {

    
    return(
        <div>
            <div>
                <h1>Container</h1>
                <Users users={users} onDeleteTask={onDeleteTask} onDeleteUser={onDeleteUser} />
            </div>
        </div>
        
    )
}

export default Container;