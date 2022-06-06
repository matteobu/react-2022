import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewEXpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const addExpenseDataHandler = (expenseData) => {
        expenses.push(expenseData);
        console.log(expenses);
    };

    const dateToFilterHandler = () => {
        console.log("TRIGGERED ON APP");
        expenses.filter((data) => expenses.date === data);
    };
    return (
        <div>
            <NewEXpense onAddExpenseData={addExpenseDataHandler} />
            <Expenses items={expenses} onDateToFilter={dateToFilterHandler} />
        </div>
    );
};

export default App;
