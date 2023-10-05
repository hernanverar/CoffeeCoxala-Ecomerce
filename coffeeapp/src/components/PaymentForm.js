// PaymentForm.js
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import "../pages/styles/PaymentForm.css";


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error creating payment method:', error);
    } else {
      console.log('Payment Method:', paymentMethod);
    }
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <CardElement className="card-elememnt" />
      <button type="submit" disabled={!stripe} className="pay-button">Pay</button>
    </form>
  );
};

export default PaymentForm;

