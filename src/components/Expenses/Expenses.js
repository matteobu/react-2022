import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    // console.log("props", props);
    const filteredDateHandler = (selectedYear) => {
        // console.log("TRIGGERED ON EXPENSES", filteredDate);
        setFilteredYear(selectedYear);
        props.onDateToFilter(filteredYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilteredDate={filteredDateHandler}
                />

                {props.items &&
                    props.items.map((item) => (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ))}
            </Card>
        </div>
    );
}

export default Expenses;
