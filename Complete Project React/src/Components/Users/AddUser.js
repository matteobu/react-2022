import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
    const [users, setUsers] = useState([]);
    const addUserHandler = (e) => {
        setUsers([
            ...users,
            { name: e.target[0].value, age: e.target[1].value },
        ]);
        e.preventDefault();
    };



    

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"></input>
                {/* <button type="submit">Add User</button> */}
                <Button type="submit">Add User</Button>
            </form>
            {users &&
                users.map((user) => (
                    <div key={user.name}>
                        {user.name} - {user.age}
                    </div>
                ))}
        </Card>
    );
};

export default AddUser;
