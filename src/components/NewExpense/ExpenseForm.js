import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });
    const changeHandler = (e) => {
        if (e.target.type === "text") {
            setUserInput((prevState) => {
                return { ...prevState, enteredTitle: e.target.value };
            });
        } else if (e.target.type === "number") {
            setUserInput((prevState) => {
                return { ...prevState, enteredAmount: e.target.value };
            });
        } else {
            setUserInput((prevState) => {
                return { ...prevState, enteredDate: e.target.value };
            });
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    };

    const closeFormHandler = () => {
        props.onCloseEditingHandler();
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={changeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enteredAmount}
                        onChange={changeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={userInput.enteredDate}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={closeFormHandler}>
                    Add Expense
                </button>
                <button type="button" onClick={closeFormHandler}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default ExpenseForm;
