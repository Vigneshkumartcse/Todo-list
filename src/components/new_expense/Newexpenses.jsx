import './Newexpenses.css'
const Newexpenses = () => {
    return (
        <div className='new-expense '>
            <form action="">
                <div className='new-expense__controls'>
                {/* title div */}
                <div className='new-expense__control'>
                    <label htmlFor=""> Title</label>
                    <input type="text" name="" id="" />
                </div>
                {/* ampount  */}
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" name="" id="" />
                </div>
                {/* date */}
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" name="" id="" />
                    </div>
                </div>
            </form>
            <div className='new-expense__actions'><button>Cancel </button> <button>add</button></div>
</div>
        
    )
}
 export default Newexpenses