import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faAdd,
    faPlus,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ExpenseTracker(){
    const [currentName, setCurrentName] = useState("");
    const [currentAmount, setCurrentAmount] = useState();
    const [expenses, setExpenses] = useState([]);
    const total = expenses.reduce((sum, expense)=>{
        return sum + Number(expense.amount);
    },0);
    function handleNameChange(event){
        setCurrentName(event.target.value);
    }
    function handleAmountChange(event){
        setCurrentAmount(event.target.value);
    }
    function addExpense(){
        if((currentName.trim() !== "") && (currentAmount !== "") && ((Number(currentAmount) > 0 && Number(currentAmount) < 1000000000)) && (currentName.length < 25)){
        setExpenses([...expenses,{
            name: currentName,
            amount: currentAmount
        }]);
        setCurrentName("");
        setCurrentAmount("");
        }
    }
    function removeExpense(index){
        setExpenses(expenses.filter((_, i)=> i !== index));
    }
    return(
        <>
            <div className="container">
                <div className="title">
                    <h3>Expense Tracker</h3>
                </div>
                <div className="total">
                    <p>Total Expenses: ₹{total}</p>
                </div>
                <div className="Field">

                    <div className="inputField">
                        <p>Name:</p>
                        <input value={currentName} onChange={handleNameChange} type="text" placeholder=" Ex: rent"/>
                        <p>Amount(₹):</p>
                        <input value={currentAmount} onChange={handleAmountChange} type="number" placeholder=" Ex: ₹10000"/>
                    </div>
                    <div className="buttonField">
                        <button onClick={addExpense}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                </div>
                <div className="expenses">
                            {
                                expenses.map((expense, index)=>
                                <div className="elements" key={index}>
                                    <p className="nameElement">{expense.name}</p>
                                    <p className="amountElement">₹{expense.amount}</p>
                                    <button onClick={()=>removeExpense(index)}><FontAwesomeIcon icon={faTrash} style={{fontSize: "12px"}}/></button>
                                </div>
                                )
                            }
                </div>
            </div>
        </>
    );
}
export default ExpenseTracker  