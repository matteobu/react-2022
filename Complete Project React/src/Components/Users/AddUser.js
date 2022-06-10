import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
    const [users, setUsers] = useState([]);
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");

    const addUserHandler = (e) => {
        if (
            enteredUserAge.trim().length === 0 ||
            enteredUserName.trim().length === 0
        ) {
            return;
        }

        if (+enteredUserAge < 1) {
            return;
        }

        setEnteredUserName("");
        setEnteredUserAge("");
        e.preventDefault();
    };

    const usernameChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
        // console.log("e.target.value", e.target.value);
    };
    const ageChangeHandler = (e) => {
        setEnteredUserAge(e.target.value);
        // console.log("e.target.value", e.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUserName}
                    onChange={usernameChangeHandler}
                ></input>
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={enteredUserAge}
                    onChange={ageChangeHandler}
                ></input>
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
