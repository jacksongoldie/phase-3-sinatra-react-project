import UserTasks from "./UserTasks";

function UserCard({ user }){
    const tasks = user.tasks.filter((t) => t.user_id == user.id)

    return(
        <div>
            <img src={user.img_url} alt="profile image" />
            <h2>{user.name}</h2>
            <p>{tasks.map((t) => <li key={t.id}>{t.desc}</li>)}</p>
            
        </div>
        // <div>
        //     <UserTasks  />
        // </div>
    )
}

export default UserCard;