import { Box, Spacer, Center } from "@chakra-ui/react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
    return (
        <Card>
            <ExpenseDate date={props.date} />
            <Center px={2} fontWeight="bold" textAlign={{ base: "center" }}>{props.title}</Center>
            <Spacer />
            <Center
                px={2}
                fontWeight="bold"
                textAlign={{ base: "center" }}>
                <Box
                    bg="green.300"
                    px="10px" py="8px"
                    borderRadius="5px"
                    border="1px"
                    boxShadow="sm"
                    borderColor="white">Rp.{props.amount}</Box>
            </Center>
        </Card>
    )
}

export default ExpenseItem