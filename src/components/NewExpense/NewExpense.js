import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState();
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpenseData(expenseData);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const closeEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {(!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )) || (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCloseEditingHandler={closeEditingHandler}
                />
            )}
        </div>
    );
}

export default NewExpense;
