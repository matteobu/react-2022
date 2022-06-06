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
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;
