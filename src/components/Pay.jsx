import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
import Logo from '../assets/ball2.png';
import MasterCard from '../assets/mastercard2.svg';
import Visa from '../assets/visa2.svg';

const stripePromise = loadStripe(
  'pk_test_51QSzxEKc9UkywROfG7gm4RQ9jRtGphCdTil2ytYRWdQf0cfNAlTykeEwdklDguQeU4L7jI9Zw3r05qusFn5Vfuys0070XC5Q18'
);

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'http://localhost:3001/create-payment-intent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      }
    );
    const data = await response.json();
    console.log('Server response:', data); // Логируем ответ от сервера

    const { clientSecret } = data;
    if (!clientSecret) {
      console.error('Client Secret отсутствует');
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      alert('Оплата прошла успешно!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='checkout-form'
    >
      <div className='form-field'>
        <CardElement />
      </div>
      <button
        type='submit'
        disabled={!stripe || !elements}
        className='payment-btn'
      >
        Confirm Payment
      </button>
    </form>
  );
};

CheckoutForm.propTypes = {
  amount: PropTypes.number.isRequired,
};

const Pay = () => {
  const location = useLocation();
  const { newPrice } = location.state || {};
  const [amount, setAmount] = useState(null);

  const handleBuyClick = () => {
    setAmount(newPrice);
  };

  return (
    <div className='page'>
      <section className='buy-card'>
        <img
          src={Logo}
          alt='Logo'
        />
        <h3>THE BEST SPORTS PREDICTIONS</h3>
        <div className='payment'>
          <p>We accept:</p>
          <img
            src={MasterCard}
            alt='MasterCard'
          />
          <img
            src={Visa}
            alt='Visa'
          />
        </div>
        <div className='payment-text'>
          <p>1 sport prediction</p>
          <p>This package includes one prediction</p>
          <p>— consists of 3 games</p>
          <p>— total odds 6</p>
          <h3>{newPrice}$</h3>
        </div>
        <Elements stripe={stripePromise}>
          {amount === null ? (
            <button
              className='btn-payment'
              onClick={handleBuyClick}
            >
              Buy now
            </button>
          ) : (
            <CheckoutForm amount={amount} />
          )}
        </Elements>
        <p className='offer-payment'>
          By paying on our site you agree terms of the agreement and risk
          statement. The site is not responsible for unfulfilled predictions.
        </p>
      </section>
    </div>
  );
};

export default Pay;
