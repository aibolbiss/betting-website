import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js еще не загружен
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Запрос на создание PaymentIntent с нужной суммой
    const response = await fetch(
      'http://localhost:3001/create-payment-intent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      }
    );

    const { clientSecret } = await response.json();

    // Подтверждение платежа через Stripe
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      // Ошибка при обработке платежа
      console.error(result.error.message);
      alert('Ошибка при оплате: ' + result.error.message);
    } else {
      // Платеж успешно завершен
      if (result.paymentIntent.status === 'succeeded') {
        alert('Платеж прошел успешно!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type='submit'
        disabled={!stripe || !elements}
      >
        Подтвердить оплату
      </button>
    </form>
  );
};

CheckoutForm.propTypes = {
  amount: PropTypes.number.isRequired, // Сумма должна быть передана в качестве пропса
};

export default CheckoutForm;
