import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    // console.log("props", props);
    const filteredDateHandler = (selectedYear) => {
        // console.log("TRIGGERED ON EXPENSES", selectedYear);
        setFilteredYear(selectedYear);
        props.onDateToFilter(selectedYear);
    };

    const filteredExpense = props.items.filter((data) => {
        return data.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilteredDate={filteredDateHandler}
                />
                <ExpensesList items={filteredExpense} />
            </Card>
        </div>
    );
}

export default Expenses;
