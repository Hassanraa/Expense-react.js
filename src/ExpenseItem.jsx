function ExpenseItem({item ,onDelete}){
    return(
         <>
        <span>{item.amount}</span>
        <span>{item.text}</span>
        <span>{item.category}</span>
        <button onClick={()=>onDelete(item.id)}>Delete</button>
        </>
    )
}
export default ExpenseItem