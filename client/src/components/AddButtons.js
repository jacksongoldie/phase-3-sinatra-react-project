import { useState } from 'react';

function AddButtons({ users, onTaskUpdate, onCreateUser }){

    const [addingTask, setAddingTask] = useState(false);
    const [addingUser, setAddingUser] = useState(false);

    const userOptions = users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)

    const blankUser = {
        name: '',
        tasks: []
    }
    const blankTask = {
        desc: '',
        //using 0 below to match value of 0 for placeholder "Select..." - honestly have no idea 
        user_id: 0
    }

    const [user, setUser] = useState(blankUser);
    const [task, setTask] = useState(blankTask);
    

    function handleAddTask(){
        setAddingTask((mUV) => !mUV)
    }

    function handleAddUser(){
        setAddingUser((mUV) => !mUV)
    }

    function handleUserChange(e){
        const name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]: value})
    }
    function handleTaskChange(e){
        const name = e.target.name;
        let value = e.target.value;

        setTask({...task, [name]: value})
    }

    function handleUserSubmit(e){
        e.preventDefault();
debugger;
        fetch(`http://localhost:9291/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(user => onCreateUser(user))
        setUser(blankUser)
    }

    function handleTaskSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:9291/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
        .then(r => r.json())
        .then(task => onTaskUpdate(task))
        setTask(blankTask)
    }

    return(
        <>
        <div>
            <button onClick={handleAddUser}>{addingUser ? '- Done Adding Users' : '+ Add Users' }</button>
        </div>
        {addingUser ? 
        <div>
            <form onSubmit={handleUserSubmit}>
                <input type='text' value={user.name} placeholder='enter name' name='name' onChange={handleUserChange} />
                <button type="submit" name='Submit'>Submit</button>
            </form>
        </div> :
        null}
        <div>
            <button onClick={handleAddTask}>{addingTask ? '- Done Adding Tasks' : '+ Add Tasks' }</button>
        </div>
        {addingTask ? 
        <div>
            <form onSubmit={handleTaskSubmit}>
                <input type='text' value={task.desc} placeholder='enter task description' name='desc' onChange={handleTaskChange} />
                <select name="user_id" value={task.user_id} onChange={handleTaskChange} required >
                        {/*GETTING AN ERROR IN CONSOLE FOR USING SELECTED BY DEFAULTVALUE AINT WORKIN :/
                        default value allows for placeholder while disabled keeps it from being selected*/}
                        <option value="0" disabled >Select...</option>
                        {userOptions}
                </select>
                <button type="submit" name='Submit'>Submit</button>
            </form>
        </div> :
        null}
        </>
    )
}

export default AddButtons;