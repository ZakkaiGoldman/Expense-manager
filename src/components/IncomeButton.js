import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap';
import { Consumer } from '../context';

class IncomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            incomeAmount: "",
            note: "",
            //selectedCatagory: 'food'
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    // onSelectCatagory = (e) => {
    //     this.setState({ selectedCatagory: e.target.options[e.target.selectedIndex].text });
    // }

    onSubmitIncome = (dispatch, e) => {
        e.preventDefault();
        const payload = {
            amount: this.state.incomeAmount,
            //catagoryName: this.state.selectedCatagory,
            note: this.state.note,
        }
        dispatch({
            type: 'ADD_INCOME',
            payload
        })

        this.toggle();
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="container">
                            {/* <div className="row d-flex justify-content-center my-3 mx-0 text-center mx-4"> */}
                            {/* <div className="col-xs-5 mx-auto">
                                    <button onClick={this.toggle} name="addExpense" type="button" className="btn btn-outline-danger rounded-circle"><i className="fas fa-minus fa-3x"></i></button>
                                </div> */}
                            {/* <div className="col-xs-5 mx-auto"> */}
                            <button onClick={this.toggle} name="addIncome" type="button" style={{ color: '#23cba7', backgroundColor: '#EBF5FB', borderColor: '#23cba7' }} className="btn rounded-circle"><i className="fas fa-plus fa-3x"></i></button>
                            {/* </div> */}
                            {/* </div> */}
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>New Income</ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.onSubmitIncome.bind(this, dispatch)}>
                                        <FormGroup>
                                            <Label htmlFor="income">Income amount</Label>
                                            <Input
                                                required
                                                type="text"
                                                name="incomeAmount"
                                                id="income"
                                                placeholder=""
                                                value={this.state.incomeAmount}
                                                onChange={this.onChange}
                                            />
                                            <Label htmlFor="note">Note</Label>
                                            <Input
                                                type="text"
                                                name="note"
                                                id="note"
                                                placeholder=""
                                                value={this.state.note}
                                                onChange={this.onChange}
                                            />

                                            {/* <h5>Choose Catagory</h5>
                                            <select onChange={this.onSelectCatagory} name="catagories" required>
                                                <option value="food">food</option>
                                                <option value="housing">housing</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                             */}
                                            <br />
                                            <br />
                                            <input type="date" />
                                            <Button
                                                color="dark"
                                                style={{ marginTop: '2rem' }}
                                                block>
                                                Add Income
                                        </Button>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                            </Modal>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default IncomeButton;