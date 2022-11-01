import { useState } from "react";
import Expenses from"./components/Expenses/Expenses"
import NewExpense from"./components/NewExpense/NewExpense"
import ExpenseFilter from "./components/Expenses/ExpenseFilter.jsx";
const dummy_expenses = [
  {
    id: 'e1',
    title: 'Mobile',
    amount: 15000,
    date: new Date(2022, 6, 15)
  },
  {
    id: 'e2',
    title: 'Laptop',
    amount: 45000,
    date: new Date(2022, 8, 15)
  },
  {
    id: 'e3',
    title: 'Football',
    amount: 650,
    date: new Date(2021, 6, 25)
  }
];
function App() {
  const [expense,setExpense]=useState(dummy_expenses)

  
  const addExpenseHandler= expense =>{
    // console.log('in app js');
      setExpense(prevExpense=> {
        return[expense,...prevExpense];
      })
  };

  return (
    <div>
      {/* <h2>Hello</h2> */}
         
     <NewExpense addExpenses={addExpenseHandler}></NewExpense>

      <Expenses items={expense}></Expenses>  
    </div>
  );

}

export default App;
