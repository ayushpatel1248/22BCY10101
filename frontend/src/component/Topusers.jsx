import React, { useEffect } from 'react'

const Topusers = () => {
    let [topUsers, setTopUsers] = useState({})
    const handleTopUsers = async () => {
        try {
            const res = await fetch("http://localhost:9999/users")
            if (!res.ok) throw new Error("Error in fetching top users")
            const data = await res.json()
            console.log(data)
            setTopUsers(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        handleTopUsers();
    }, [])

  return (
    <div>
        <h1>Top Users</h1>
        <p>this are the top users</p>
        <ul>
            {topUsers.map((user, index) => {
                return <li key={index}>{topUsers[user]}</li>
            })}
        </ul>
    </div>
  )
}

export default Topusers