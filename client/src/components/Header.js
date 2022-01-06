import AddButtons from "./AddButtons";

function Header({ users, onTaskUpdate, onCreateUser }){
    return(
        <>
            <div>
                <h1>To-Do</h1>
            </div>
            <div>
                <AddButtons users={users} onTaskUpdate={onTaskUpdate} onCreateUser={onCreateUser}/>
            </div>
        </>
    )
}

export default Header;