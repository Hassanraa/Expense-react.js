import ExpenseItem from "./ExpenseItem"
function ExpenseList({expense, onDelete}){
    if(expense.length === 0){
        return <p>'No Expense Added'</p>;
    }
    return(
        <>
        {expense.map((item) => (
            <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
        ))}
        </>
    )
}
export default ExpenseList