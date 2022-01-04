import UserTasks from "./UserTasks";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UserCard({ user, onDeleteTask, onDeleteUser }){

    function handleDelete(){
        fetch(`http://localhost:9291/users/${user.id}`,{
            method: 'DELETE'
        })
        .then(r => r.json())
        .then((deleted) => onDeleteUser(deleted))
    }

    return(
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '20em', background: '#000', margin: '.1em' }}>
                <Card.Img variant="top" className='fluid rounded-circle'  src={user.img_url} alt="profile" />
                <Card.Body className="text-white" style={{ margin: '.1em' }}>
                    <Card.Title>{user.name} <Button variant="outline-danger" onClick={handleDelete}>❌</Button></Card.Title>
                    <UserTasks tasks={user.tasks} onDeleteTask={onDeleteTask} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard;