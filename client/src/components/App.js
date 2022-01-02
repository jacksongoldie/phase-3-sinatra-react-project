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

  return (
    <div className="App">
      <Header />
      <Container users={users} />
      <Champion />
    </div>
  );
}

export default App;
