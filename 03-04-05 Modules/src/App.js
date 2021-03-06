import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewEXpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
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

const App = () => {
    const [expenses, setExpenses] = useState(dummyExpenses);

    const addExpenseDataHandler = (expenseData) => {
        setExpenses((prevExpenses) => {
            return [expenseData, ...prevExpenses];
        });
        console.log(expenses);
    };

    const dateToFilterHandler = (filteredYear) => {
        console.log("filteredYear", filteredYear);
        // console.log("expenses", expenses);
        // console.log("expenses", expenses[0].date.getFullYear());
    };
    return (
        <div>
            <NewEXpense onAddExpenseData={addExpenseDataHandler} />
            <Expenses items={expenses} onDateToFilter={dateToFilterHandler} />
        </div>
    );
};

export default App;
