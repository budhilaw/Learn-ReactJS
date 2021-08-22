import ExpenseItem from "./ExpenseItem";
import {Box} from "@chakra-ui/react";

const Expenses = (props) => {
    return (
        <Box px={4} py={2} rounded="md" bg="gray.600">
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
        </Box>
    )
}

export default Expenses;