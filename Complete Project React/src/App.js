import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
    const [users, setUsers] = useState([]);

    const addedUserHandler = (userDatas) => {
        console.log("userDatas", userDatas);
        setUsers({ userDatas });
    };

    return (
        <div>
            <AddUser onAddedUser={addedUserHandler} />
            {/* <UsersList usersList={users} /> */}
        </div>
    );
}

export default App;
