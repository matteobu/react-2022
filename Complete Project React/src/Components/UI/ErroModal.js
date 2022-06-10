import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErroModal = (props) => {
    const errorToDisable = () => {
        props.onError();
    };

    return (
        <>
            <div className={classes.backdrop} onClick={errorToDisable}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={errorToDisable}> Okay </Button>
                </footer>
            </Card>
        </>
    );
};

export default ErroModal;
