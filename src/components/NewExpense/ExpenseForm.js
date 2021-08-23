import React, {useState} from "react";
import {FormControl, FormLabel, Button, Input} from "@chakra-ui/react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <FormControl pb={4}>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                    id="title"
                    type="text"
                    bg="white"
                    textColor="black"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                    placeholder="Please input the title" />
            </FormControl>
            <FormControl pb={4}>
                <FormLabel htmlFor="number">Amount</FormLabel>
                <Input
                    id="amount"
                    type="number"
                    bg="white"
                    textColor="black"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                    placeholder="Please input the amount" />
            </FormControl>
            <FormControl pb={4}>
                <FormLabel htmlFor="date">Amount</FormLabel>
                <Input
                    id="date"
                    type="date"
                    bg="white"
                    textColor="black"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                    placeholder="Please input the date" />
            </FormControl>
            <Button mt={2} colorScheme="teal" type="submit">
                Add Expense
            </Button>
        </form>
    )
}

export default ExpenseForm;