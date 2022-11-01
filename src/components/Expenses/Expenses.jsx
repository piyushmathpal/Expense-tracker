import react, { useState } from "react";
import Card from "../UI/Card.js";

import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpensesList from './ExpensesList'
import ExpensesChart from "./ExpenseChart.jsx";

function Expenses(props) {
  const [selectedYear, setSelectedyear] = useState('2022')
  const yearFilterHandler = (yearfilter) => {
    setSelectedyear(yearfilter);

  }
  const filteredexpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===selectedYear;
  })
  
    

  return (
    <div>

      <Card className="expenses">
        <ExpensesChart expenses={filteredexpenses}/>
        <ExpenseFilter selected={selectedYear} 
        yearFilter={yearFilterHandler}>
        </ExpenseFilter>
        
        <ExpensesList itemm={filteredexpenses}/>
        {/* <ExpenseItem 
          title={props.items[0].title}
           amount={props.items[0].amount} 
           date={props.items[0].date}> 
           </ExpenseItem>
           <ExpenseItem title={props.items[1].title}
           amount={props.items[1].amount} 
           date={props.items[1].date}> 
           </ExpenseItem>
           <ExpenseItem title={props.items[2].title}
           amount={props.items[2].amount} 
           date={props.items[2].date}> 
           </ExpenseItem>       */}
      </Card>
    </div>
  );

}

export default Expenses;