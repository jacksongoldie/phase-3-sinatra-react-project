import '../App.css';
import Header from './Header';
import Container from './Container';
import Champion from './Champion';
import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  //set tasks and prop down to usertasks, filter tasks by user id
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9291/users`)
    .then(r => r.json())
    .then((data) => setUsers(data))

    fetch(`http://localhost:9291/tasks`)
    .then(r => r.json())
    .then((data) => setTasks(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <Container users={users} tasks={tasks} />
      <Champion />
    </div>
  );
}

export default App;
