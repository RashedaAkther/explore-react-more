import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))

    }, [])

    return(
        <div>
        <h3>users:{users.length}</h3>
        
        </div>
    )
}

/**
 * 1. declare a sate to hold data
 * useEffect with call back and dependency array
 * use fatch to load data
 */