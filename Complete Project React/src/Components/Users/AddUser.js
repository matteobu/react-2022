import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErroModal from "../UI/ErroModal";
import { Wrapper } from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if (
            enteredUserAge.trim().length === 0 ||
            enteredUserName.trim().length === 0
        ) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid Name and Age (no empty values)",
            });
            return;
        }

        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid Age (>0)",
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);

        setEnteredUserName("");
        setEnteredUserAge("");
    };

    const usernameChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
    };
    const ageChangeHandler = (e) => {
        setEnteredUserAge(e.target.value);
    };

    const errorHandler = () => {
        console.log("error button got clicked");
        setError(null);
    };
    return (
        <Wrapper>
            {error && (
                <ErroModal
                    title={error.title}
                    message={error.message}
                    onError={errorHandler}
                />
            )}
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
        </Wrapper>
    );
};

export default AddUser;
