import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';

export default function Friends (){

    const [friends, setFriends] = useState([]);

    useEffect(()=>{

        fetch(' https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then(data => setFriends(data))


    }, [])

    return(
        <div className='box'>
        <h3> Friends:{friends.length} </h3>
        {
            friends.map(friend =><Friend friend={friend}></Friend>)
        }
        </div>
    )
}

/**
 * state to hold data
 * useEffect with dependency array
 * use fetch load data
 * set loaded data to the state
 * display data on the component
 * */ 