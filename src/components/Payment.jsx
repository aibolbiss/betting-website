import Logo from '../assets/ball2.png';

const Payment = () => {
  return (
    <div className='page'>
      <section className='buy-card'>
        <img
          src={Logo}
          alt='Logo'
        />
        <h3>SPORTS PREDICTIONS</h3>
        <p>On this page you can buy sports prediction with a higher odds</p>
        <button>Buy now</button>
      </section>
      <section>
        <h2>
          Payment for the order is carried out according to the following
          scheme:
        </h2>
        <p>
          1. After selecting goods (services) when placing an order, enter your
          email address and read the agreement and the amount of the goods
          (services). 2. Select a Payment Method. 3. You will be redirected to a
          secure page of the payment system After making the payment, you will
          be returned to the site, where you will be informed about the result
          of the transaction
        </p>
      </section>
    </div>
  );
};

export default Payment;
