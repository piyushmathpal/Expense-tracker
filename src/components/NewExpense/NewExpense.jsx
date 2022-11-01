
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import { useState } from "react";
const NewExpense =(props)=>{
    const [isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>
    {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
            
        }
        props.addExpenses(expenseData);
        setIsEditing(false);

    };
    const startEditing=()=>{
        setIsEditing(true);
    }
    const setCancelEditing=()=>{
        setIsEditing(false)
    }
    return(
        <div className="new-expense">
            { !isEditing &&<button onClick={startEditing}>Add new Expense</button>}
            { isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler } cancelEdtiting={setCancelEditing}></ExpenseForm>}
           

        </div>
    )
}
export default  NewExpense ;