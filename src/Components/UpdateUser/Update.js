import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const url = `http://localhost:7000/user/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        const url = `http://localhost:7000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('user updated success')
            })
    }

    return (
        <div>
            <h2>this is update page : {user.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" placeholder='Name' /><br />
                <input type="email" name="email" id="" placeholder='Email' /><br />
                <input type="submit" value="update User" />
            </form>
        </div>
    );
};

export default Update;