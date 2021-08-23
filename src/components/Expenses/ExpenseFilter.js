import React from "react";
import {FormControl, Grid, GridItem, Select, Text} from "@chakra-ui/react";

const ExpenseFilter = (props) => {
    const filterHandler = (e) => {
        props.onChangeYear(e.target.value);
    }

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={2} mt={2}>
            <GridItem colSpan={4}>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    textColor="white">Filter by year:</Text>
            </GridItem>
            <GridItem>
                <form>
                    <FormControl id="filterByYear">
                        <Select
                            bg="white"
                            textColor="black"
                            onChange={filterHandler}
                            value={props.selected}>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </Select>
                    </FormControl>
                </form>
            </GridItem>
        </Grid>
    )
}

export default ExpenseFilter;