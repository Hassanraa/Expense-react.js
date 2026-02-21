import './App.css'
import Expenseform from './ExpenseForm'
import ExpenseList from './ExpenseList'
import useExpenses from './hooks/useExpenses'

function App() {
  const{
     expense,
    addExpense,
    expenseDelete,
    allDelete,
     totalCalculator,
  }= useExpenses();

  return (
    <>
    <h1>Expense Tracker</h1>
    <h3>Total amount of expenses RS:{totalCalculator()}</h3>
     <Expenseform   onAdd={addExpense}/>
     <ExpenseList expense={expense}  onDelete={expenseDelete}/>
     <button onClick={allDelete}>All clear</button>
    </>
  )
}

export default App
