import { useState } from "react";
export default function Expense(){
     const[expense , setExpense]=useState([])

      const addExpense= ({text,amount,category})=>{
        const newExpense={
                id: Date.now(),
                text,
                amount,
                category,
            }
    setExpense(pre => [...pre ,newExpense])
        }
   const expenseDelete=(id)=>{
    setExpense(pre=>pre.filter((item)=>item.id !==id)
    )
   
   }
    const allDelete=()=>{
        setExpense([])
    }
    const totalCalculator=()=>
       expense.reduce((total , price)=> total + Number(price.amount), 0) 
    
   return{
    addExpense,
    expenseDelete,
    expense,
    allDelete,
    totalCalculator,
   };
}