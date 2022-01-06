import UserCard from "./UserCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Users({ users, onDeleteTask, onDeleteUser }){

    const usersDisplay = users.map((user) => {
        return(
                <Col key={user.id}>
                <UserCard user={user}  
                    onDeleteTask={onDeleteTask} 
                    onDeleteUser={onDeleteUser} />
                </Col>
        )})
    
    
    return(
        <div>
            <Container fluid>
                <Row>
                    {usersDisplay}
                </Row>
            </Container>
        </div>
    )
}

export default Users;