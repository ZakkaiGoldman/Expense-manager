import React, { Component } from 'react';

const Context = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses],
                catagories: state.catagories.map(catagory => {
                    if (catagory.title === action.payload.catagoryName) {
                        return {
                            ...catagory,
                            value: catagory.value + parseInt(action.payload.amount, 10)
                        };

                    }
                    return catagory;
                }),
                ExpensesSum: state.ExpensesSum + parseInt(action.payload.amount, 10)
            }
        case 'ADD_INCOME':
            return {
                ...state,
                income: [action.payload, ...state.income],
                IncomeSum: state.IncomeSum + parseInt(action.payload.amount, 10)
            }
        default:
            return state;
    }
}


export class Provider extends Component {
    state = {
        expenses: [
            { amount: 300, note: "restuarnt", catagory: "food", id: 0 },
            { amount: 45, note: "electricity", catagory: "housing", id: 1 },
            { amount: 30, note: "bus", catagory: "transportation", id: 2 },
            { amount: 60, note: "movie", catagory: "entertainment", id: 3 },
            { amount: 75, note: "shirt", catagory: "clothing", id: 3 },
            { amount: 200, note: "gas", catagory: "car", id: 5 },
            { amount: 120, note: "tooth brush", catagory: "toiletery", id: 6 },
            { amount: 475, note: "phone", catagory: "comunication", id: 7 },
            { amount: 393, note: "pills", catagory: "medical", id: 8 },
            { amount: 110, note: "restuarant", catagory: "eating out", id: 9 }
        ],
        //pie chart data
        catagories:
            [
                { title: "food", color: "#354458", value: 300, id: 0 },
                { title: "housing", color: "#3A9AD9", value: 45, id:1 },
                { title: "transportation", color: "#29ABA4", value: 30, id:2 },
                { title: "entertainment", color: "#E9E0D6", value: 60, id:3 },
                { title: "clothing", color: "#EB7260", value: 75, id:4 },
                { title: "car", color: "#F5DF65", value: 200, id:5 },
                { title: "toiletery", color: "#dd8f2a", value: 120, id:6 },
                { title: "comunication", color: "#9975B9", value: 475, id:7 },
                { title: "medical", color: "#737495", value: 393, id:8 },
                { title: "eating out", color: "#EB65A0", value: 110, id:9 }
            ]
        ,
        income: [
            { amount: 350, note: "salary", id: 0 },
            { amount: 120, note: "prize", id: 1 }
        ],
        ExpensesSum: 1808,
        IncomeSum: 470,
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;

