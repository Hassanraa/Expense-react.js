import { useState } from "react"

export default function Expenseform({onAdd}){

    const[text , setText]=useState()
    const [amount,setAmount]=useState()
    const [category, setCategory]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!text || !amount) return alert('Please fill it')
            onAdd({text,amount,category})
            setText('')
            setAmount('')
            setCategory('')    
            }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
         <input placeholder="title" value={text} onChange={(e)=>setText(e.target.value)}/>
         <select value={category} onChange={(e)=>setCategory(e.target.value)} >
            <option>Food</option>
            <option>Shopping</option>
            <option>Treval</option>
            <option>other</option>
         </select>
        <button>Submit</button>
        </form>
        </>
    )
}