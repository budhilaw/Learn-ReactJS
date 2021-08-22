import {Flex} from "@chakra-ui/react";

const Card = (props) => {
    return (
        <Flex
            bg="gray.300"
            direction={{ base: "column", md: "row" }}
            my={3}
            rounded={"lg"}
            boxShadow="md">
            {props.children}
        </Flex>
    )
}

export default Card;