import React from 'react'
import { Consumer } from '../context';

const ExpensesList = () => {
    return (
        <Consumer>
            {value => {
                const { expenses, ExpensesSum } = value;
                return (
                    <div className="conatainer">
                        <div className="row d-flex justify-content-center my-5 mx-0 text-center mx-4">
                            <div className="col-md-6 col-sm-12">
                                <h4>Total Expenses: {ExpensesSum}</h4>
                                <ul className="list-group">
                                    {
                                        expenses.map(expense => (
                                            <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                {expense.note}
                                                <span className="badge badge-danger badge-pill">{expense.amount}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div >
                );
            }
            }
        </Consumer>
    );
}

export default ExpensesList;
