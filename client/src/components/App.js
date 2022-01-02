import '../App.css';
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
      <h1>g</h1>
    </div>
  );
}

export default App;
