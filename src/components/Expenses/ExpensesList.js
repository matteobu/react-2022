import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    // console.log("props IN EXPENSES LISTS", props);
    let expensesContent = <p>NO EXPENSE TO DISPLAY</p>;

    if (props.filteredExpense.length > 0) {
        expensesContent = props.filteredExpense.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ));
    }
    return <div className="expenses-list">{expensesContent}</div>;
};

export default ExpensesList;
