import './expenses.css'
import Expenseitem from '../expense_item/Expenseitem';
const Expenses=(props)=>{
    const{expenses=[]}=props;
    const getexpenses = () => {
        if(expenses.length <= 0)
        {
            return(<div className="expenses-list__fallback">
                No expenses found.
            </div>)
        }
        else{
            return(
                <div className="expenses-list">
                    {
                        expenses.map(eachexpense=>(<Expenseitem
                            key={eachexpense.id}
                            amount={eachexpense.amount}
                            description={eachexpense.title}
                            date={eachexpense.date}
                            />))
                    }
                </div>
            )  
        }
    }
    getexpenses()
    return(
        <div className="expenses ">
            {
                
                getexpenses()
            }
        </div>
    )
}
export default Expenses