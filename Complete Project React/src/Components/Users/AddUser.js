import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");

    const addUserHandler = (e) => {
        if (
            enteredUserAge.trim().length === 0 ||
            enteredUserName.trim().length === 0
        ) {
            return;
        } else {
            props.onAddedUser({ name: enteredUserName, age: enteredUserAge });
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
    };
    const ageChangeHandler = (e) => {
        setEnteredUserAge(e.target.value);
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
        </Card>
    );
};

export default AddUser;
