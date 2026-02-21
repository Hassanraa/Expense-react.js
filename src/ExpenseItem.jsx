function ExpenseItem({item ,onDelete}){
    return(
         <div className="item">
        <span>{item.amount}</span>
        <span>{item.text}</span>
        <span>{item.category}</span>
        <button className="delete" onClick={()=>onDelete(item.id)}>Delete</button>
        </div>
    )
}
export default ExpenseItem