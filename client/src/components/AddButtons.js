import { useState } from 'react';

function AddButtons(){

    const [addingTask, setAddingTask] = useState(false);

    const blankTask = {
        desc: '',
        user_id: null
    }
    const [task, setTask] = useState(blankTask);
    

    function handleAddTask(){
        setAddingTask((mUV) => !mUV)
    }

    function handleTaskChange(e){
        const name = e.target.name;
        let value = e.target.value;

        setTask({...task, [name]: value})
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
        .then(task => console.log(task))
        setTask(blankTask)
    }

    return(
        <>
        <div>
            <button>Add User</button>
        </div>
        <div>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
        {addingTask ? 
        <div>
            <form onSubmit={handleTaskSubmit}>
                <input type='text' value={task.desc} placeholder='enter task description' name='desc' onChange={handleTaskChange} />
            </form>
        </div> :
        null}
        </>
    )
}

export default AddButtons;