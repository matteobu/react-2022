import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

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

                {filteredExpense.length === 0 ? (
                    <p>NO EXPENSE TO DISPLAY</p>
                ) : (
                    filteredExpense.map((item) => (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ))
                )}
            </Card>
        </div>
    );
}

export default Expenses;
