import {Box} from "@chakra-ui/react";

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <Box
            paddingY="10px"
            textColor="white"
            border="2px"
            borderColor="white"
            borderRadius="10px"
            width="90px"
            bg="gray.600"
            fontWeight="bold"
            textAlign="center">
            <Box>{month}</Box>
            <Box>{day}</Box>
            <Box>{year}</Box>
        </Box>
    )
}

export default ExpenseDate;