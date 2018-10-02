import React from 'react'
import { Consumer } from '../context';

//return the apropriate icon class depending on the title
const iconForTitle = (title) => {
    switch (title) {
        case 'food':
            return <i className="fas fa-utensils fa-2x"></i>;
        case 'housing':
            return <i className="fas fa-home fa-2x"></i>;
        case 'transportation':
            return <i className="fas fa-bus fa-2x"></i>;
        case 'entertainment':
            return <i class="fas fa-cocktail fa-2x"></i>;
        case 'clothing':
            return <i class="fas fa-tshirt fa-2x"></i>;
        case 'car':
            return <i class="fas fa-car fa-2x"></i>;
        case 'toiletery':
            return <i class="fas fa-bath fa-2x"></i>;
        case 'comunication':
            return <i class="fas fa-phone fa-2x"></i>;
        case 'medical':
            return <i class="fas fa-user-md fa-2x"></i>;
        case 'eating out':
            return <i class="fas fa-utensils fa-2x"></i>;
        default:
            return <i className="fas fa-question fa-2x"></i>;
    }
}


const CatagoryLabels = () => {
    return (
        <Consumer>
            {value => {
                const { catagories, ExpensesSum } = value;
                return (
                    <div>
                        <div className="row d-flex justify-content-center mx-0 my-3">
                            {catagories.map(catagory => (
                                <div className="col-xs-3 mx-4 my-2 text-center" key={catagory.id} style={{ color: catagory.color, border: 'none' }}>
                                    {iconForTitle(catagory.title)} {+ " " + Math.round((catagory.value / ExpensesSum) * 100)} %
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }}
        </Consumer>
    )
}

export default CatagoryLabels;