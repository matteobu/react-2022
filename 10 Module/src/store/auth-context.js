import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLoggin: () => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem("isLoggedIn");

        if (storedUserLoggedInInformation) {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLoggin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
