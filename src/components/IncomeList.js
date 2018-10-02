import React from 'react'
import { Consumer } from '../context';

const IncomeList = () => {
    return (
        <Consumer>
            {value => {
                const { IncomeSum, income } = value;
                return (
                    <div className="conatainer">
                        <div className="row d-flex justify-content-center pb-5 mt-5 mx-0 text-center mx-4">
                            <div className="col-md-6 col-sm-12">
                                <h4>Total Income: {IncomeSum}</h4>
                                <ul className="list-group">
                                    {
                                        income.map(incomeItem => (
                                            <li key={incomeItem.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                {incomeItem.note}
                                                <span className="badge badge-success badge-pill">{incomeItem.amount}</span>
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

export default IncomeList;
