import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErroModal from "../UI/ErroModal";
import { Wrapper } from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName, setEnteredUserName] = useState("");
    // const [enteredUserAge, setEnteredUserAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid Name and Age (no empty values)",
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid Age (>0)",
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";

        // setEnteredUserName("");
        // setEnteredUserAge("");
    };

    // const usernameChangeHandler = (e) => {
    //     setEnteredUserName(e.target.value);
    // };
    // const ageChangeHandler = (e) => {
    //     setEnteredUserAge(e.target.value);
    // };

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
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUserName}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    ></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredUserAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    ></input>
                    {/* <button type="submit">Add User</button> */}
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
