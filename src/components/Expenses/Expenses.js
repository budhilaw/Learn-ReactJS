import ExpenseItem from "./ExpenseItem";
import {Box} from "@chakra-ui/react";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onChangeYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Box px={4} py={2} rounded="md" bg="gray.600">
            <ExpenseFilter
                selected={filteredYear}
                onChangeYear={onChangeYearHandler} />

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