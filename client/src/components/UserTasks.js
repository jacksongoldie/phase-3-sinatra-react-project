function UserTasks({ tasks }){

    return(
        <div>
            <p>{tasks.map((t) => <li key={t.id}>{t.desc}</li>)}</p>
        </div>
    )
}

export default UserTasks;