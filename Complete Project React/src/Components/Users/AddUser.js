import React from "react";

const AddUser = () => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
