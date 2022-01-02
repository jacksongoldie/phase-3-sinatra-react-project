function Users({ users }){

    const usersDisplay = users.map((u) => {
        return(<div>
            <h2>{u.name}</h2>
            <img src={u.img_url} />
        </div>
        )
    })
    
    return(
        <div>
            {usersDisplay}
        </div>
    )
}

export default Users;