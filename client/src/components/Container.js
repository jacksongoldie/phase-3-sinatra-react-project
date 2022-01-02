import Users from "./Users";

function Container({ users }) {
    return(
        <div>
            <h1>Container</h1>
            <Users users={users} />
        </div>
    )
}

export default Container;