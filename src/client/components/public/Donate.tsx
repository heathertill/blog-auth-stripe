import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { RouteComponentProps } from 'react-router';

import Form from './Form';

export interface IDonateProps extends RouteComponentProps<{}> { }

const Donate: React.SFC<IDonateProps> = () => {


    return (
        <main className="container fromTheDonate">
            <StripeProvider apiKey="pk_test_aY4tBDlLDE9vshY5LMZqV2gv00ifjC92sB">
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
        </main>
    );
}

export default Donate;