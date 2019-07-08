import * as React from 'react';
import { useState, useEffect } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

export interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

export interface Charge {
    name: string,
    amount: string
}

const Form: React.SFC<IFormProps> = () => {

    const [name, setName] = useState('')

    return (
<section className="container">
<form
    className="from-group mt-3 border border-primary rounded shadow-lg p-3"
    // onSubmit={this.handleSubmit}
>
    <label>Name</label>
    <input
        type="text"
        className="input-group my-1 p-1 border border-dark"
        // value={this.state.name}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
    />
    <label>Amount</label>
    <input
        type="text"
        className="input-group my-1 p-1 border border-dark"
        // value={this.state.amount}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
    />
    <label>Card Number</label>
    <CardNumberElement className="input-group bg-white p-2 border border-dark" />
    <div className="d-flex">
        <div className="flex-fill mr-2">
            <label>Expiration date</label>
            <CardExpiryElement className="input-group p-2 bg-white border border-dark" />
        </div>
        <div className="flex-fill ml-2">
            <label>CVC</label>
            <CardCVCElement className="input-group p-2 bg-white border border-dark" />
        </div>
    </div>
    <button className="btn btn-primary border border-dark mt-3 shadow">Charge It!</button>
</form>
</section>
    );
}

export default injectStripe(Form);