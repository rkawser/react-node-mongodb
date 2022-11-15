import React from 'react';

const AddUser = () => {

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        fetch('http://localhost:7000/user', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
                alert('addUser seccessful')
                console.log('add newUser', data)
            })
    }

    return (
        <div>
            <h2>this add user page</h2>

            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='Name' /> <br />
                <input type="email" name="email" id="" placeholder='Email' /> <br />
                <input type="submit" value="add User" />
            </form>

        </div>
    );
};

export default AddUser;