import Users from "./Users";
import UserTasks from "./UserTasks";

function Container({ users, tasks }) {

    
    return(
        <div>
            <div>
                <h1>Container</h1>
                <Users users={users} />
            </div>
            <div>
                <UserTasks tasks={tasks} />
            </div>
        </div>
        
    )
}

export default Container;