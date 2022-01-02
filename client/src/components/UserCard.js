function UserCard({ user }){
    return(
        <div>
            <img src={user.img_url} alt="profile image" />
            <h2>{user.name}</h2>
        </div>
    )
}

export default UserCard;