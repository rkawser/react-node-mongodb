import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = id => {
        const procced = window.confirm('are you sure you want to delete this product')

        if (procced) {
            const url = `http://localhost:7000/user/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const deleteUser = users.filter(user => user._id !== id)
                        setUsers(deleteUser)
                    }
                    
                   
                })
        }

    }

    return (
        <div>
            <h2>this is Home page</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>name: {user.name} email: {user.email}
                        <Link to={`/update/${user._id}`}><button>update</button></Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;