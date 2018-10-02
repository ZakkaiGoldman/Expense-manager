import React from 'react'
import ExpenseButton from './ExpenseButton';
import IncomeButton from './IncomeButton';


const Buttons = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center my-3 mx-0 text-center mx-4">
                <div className="col-xs-5 mx-auto">
                    <ExpenseButton />
                </div>
                <div className="col-xs-5 mx-auto">
                    <IncomeButton />
                </div>
            </div>
        </div>

    )
}

export default Buttons;