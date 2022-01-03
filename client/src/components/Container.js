import Users from "./Users";
import UserTasks from "./UserTasks";

function Container({ users }) {

    
    return(
        <div>
            <div>
                <h1>Container</h1>
                <Users users={users} />
            </div>
        </div>
        
    )
}

export default Container;