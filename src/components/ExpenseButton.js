import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap';
import { Consumer } from '../context';

class ExpenseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      expenseAmount: "",
      note: "",
      selectedCatagory: 'food'
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

  onSelectCatagory = (e) => {
    this.setState({ selectedCatagory: e.target.options[e.target.selectedIndex].text });
  }

  onSubmitExpense = (dispatch, e) => {
    e.preventDefault();
    const payload = {
      amount: this.state.expenseAmount,
      catagoryName: this.state.selectedCatagory,
      note: this.state.note,
    }
    dispatch({
      type: 'ADD_EXPENSE',
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
            <div className="">
              {/* <div className="row d-flex justify-content-center my-3 mx-0 text-center mx-4"> */}
                {/* <div className="col-xs-5 mx-auto"> */}
                  <button onClick={this.toggle} name="addExpense" type="button" style={{color: '#e26a6a', backgroundColor: '#EBF5FB', borderColor: '#e26a6a'}} className="btn btn-outline rounded-circle"><i className="fas fa-minus fa-3x"></i></button>
                {/* </div> */}
                {/* <div className="col-xs-5 mx-auto">
                  <button name="addIncome" type="button" className="btn btn-outline-success rounded-circle"><i className="fas fa-plus fa-3x"></i></button>
                </div> */}
              {/* </div> */}


              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>New Expense</ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.onSubmitExpense.bind(this, dispatch)}>
                    <FormGroup>
                      <Label htmlFor="expence">Expense amount</Label>
                      <Input
                        required
                        type="text"
                        name="expenseAmount"
                        id="expence"
                        placeholder=""
                        value={this.state.expenseAmount}
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

                      <h5>Choose Catagory</h5>
                      <select onChange={this.onSelectCatagory} name="catagories" required>
                        <option value="food">food</option>
                        <option value="housing">housing</option>
                        <option value="transportation">transportation</option>
                        <option value="entertainment">entertainment</option>
                        <option value="clothing">clothing</option>
                        <option value="car">car</option>
                        <option value="toiletery">toiletery</option>
                        <option value="comunication">comunication</option>
                        <option value="medical">medical</option>
                        <option value="eating out">eating out</option>
                      </select>
                      <br />
                      <br />

                      <input type="date" />

                      <Button
                        color="dark"
                        style={{ marginTop: '2rem' }}
                        block>
                        Add Expense
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

export default ExpenseButton;