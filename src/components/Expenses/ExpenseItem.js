import React, { useState } from "react";

import {Box, Spacer, Center, Button} from "@chakra-ui/react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card>
            <ExpenseDate date={props.date} />
            <Center px={2} fontWeight="bold" textAlign={{ base: "center" }}>{title}</Center>
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
            <Button
                colorScheme={"teal"}
                size="md"
                onClick={clickHandler}
                m={7}>
                Change Title
            </Button>
        </Card>
    )
}

export default ExpenseItem;