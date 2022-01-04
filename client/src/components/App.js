import '../App.css';
import Header from './Header';
import Container from './Container';
import Champion from './Champion';
import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9291/users`)
    .then(r => r.json())
    .then((data) => setUsers(data))
  }, [])

  //should i set state for tasks and use as dependency for users fetch??
  function onTaskUpdate(task){
    const updatedUsers = users.map((u) => {
      if(u.id === task.user_id){
        u.tasks = [...u.tasks, task]
        return u
      } 
      else{
        return u
      }
  })
  setUsers(updatedUsers)
}

  function onDeleteTask(deletedTask){
    const updatedUsers = users.map((u) => {
      if(u.id === deletedTask.user_id){
        const updatedTasks = u.tasks.filter((t) => t.id !== deletedTask.id)
        u.tasks = updatedTasks
        return u
      } 
      else{
        return u
      }
  })
  setUsers(updatedUsers)
  }

  function onDeleteUser(deletedUser){
    const updatedUsers = users.filter((u) => u.id !== deletedUser.id)
    setUsers(updatedUsers)
  }

  function onCreateUser(user){
    setUsers([user, ...users])
  }

  return (
    <div className="App">
      <Header users={users} onTaskUpdate={onTaskUpdate} onCreateUser={onCreateUser} />
      <Container users={users} onDeleteTask={onDeleteTask} onDeleteUser={onDeleteUser} />
      <Champion />
    </div>
  );
}

export default App;
