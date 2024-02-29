import './ExpenseItem.css'
import './ExpenseDate.css'
import { useState } from 'react';

const Expenseitem=(data)=>{
    let description = data.description;
    const [value,setValue]=useState(description) ;
    const amount = data.amount;
    const day =data.date.toLocaleString('en-US',{day:'numeric'});
    const month =data.date.toLocaleString('en-US',{month:'long'}) ;
    const year =data.date.toLocaleString('en-US',{year:'numeric'});
    const funct1=()=>{
       setValue("updated");
       setTimeout(()=>{
        setValue(data.description)
       },5000)
        
    }
    //or const year=data.date.getFullYear()
    return (
        <div className="expense-item">
            {/*Date*/}
            <div className='expense-date'> 
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            </div>
            {/* description and amount*/}
            <div className="expense-item__description">
                <h2>{value}</h2>
                <div className="expense-item__price ">${amount}</div>
            </div>
            
        </div>
    )
}
export default Expenseitem;