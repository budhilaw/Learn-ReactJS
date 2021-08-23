import './App.css';
import {Container} from "@chakra-ui/react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        { id: 1, title: "Playstation 5", amount: 9000000, date: new Date(2021, 9, 20) },
        { id: 2, title: "Xbox One S", amount: 8000000, date: new Date(2021, 7, 8) },
        { id: 3, title: "Keychron K6", amount: 2000000, date: new Date(2021, 6, 10) }
    ];

    const addExpenseHandler = expense => {
        console.log('in App.js')
        console.log(expense)
    }

    return (
        <div>
            <Container my={10} maxW={"container.md"}>
                <NewExpense onAddExpense={addExpenseHandler} />
            </Container>
            <Container my={10} maxW={"container.xl"}>
                <Expenses items={expenses} />
            </Container>
        </div>
    );
}

export default App;
