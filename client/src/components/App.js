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

  function onTaskUpdate(task){
    const updatedUsers = users.map((u) => {
      if(u.id == task.user_id){
        u.tasks = [...u.tasks, task]
        return u
      } 
      else{
        return u
      }
  })
  setUsers(updatedUsers)
}

  function onCreateUser(user){
    setUsers([user, ...users])
  }

  return (
    <div className="App">
      <Header users={users} onTaskUpdate={onTaskUpdate} onCreateUser={onCreateUser} />
      <Container users={users} />
      <Champion />
    </div>
  );
}

export default App;
