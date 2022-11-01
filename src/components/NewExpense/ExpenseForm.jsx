import react,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [newTitle,setNewTitle]=useState('')
    const [newAmount,setNewAmount]=useState('')
    const [newDate,setNewDate]=useState('')
    // const [userInput,setUserInput]=useState(
    //     {
    //     enteredAmount:'',
    //     enteredDate:'',
    //     enteredTitle:''
    //     }
    // )
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: newTitle,
            amount: +newAmount,
            date:new Date(newDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');


    }
 
 
 
    const titleChangeHandler=(event)=>{
        setNewTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle :event.target.value,
        // })

    }
    const amountChangeHandler=(event)=>{
        setNewAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount :event.target.value,
        // })
    }
    const dateChangeHandler=(event)=>{
        setNewDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate :event.target.value,
        // })
    }
    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label >Title</label>
                <input type="text" value={newTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                <label >Amount</label>
                <input type="number" min='0.01' step='0.01' value={newAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label >Date</label>
                <input type="date" min='2019-01-01' max='2025-12-31' value={newDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__action">
                <button onClick={props.canelEditing}>Cancel</button>
                    <button type='submit'>Add Expense</button>

                </div>

            </div>
        </form>
    )
}
export default ExpenseForm;