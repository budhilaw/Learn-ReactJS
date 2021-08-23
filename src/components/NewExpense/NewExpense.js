import React from "react";
import {Box, Heading} from "@chakra-ui/react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <Box
            my={4} p={4}
            bg="gray.600"
            rounded="lg"
            textColor="white">
            <Heading as="h1" size="xl" mb={4} textAlign={"center"}>
                Add a new expense
            </Heading>

            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </Box>
    );
};

export default NewExpense;