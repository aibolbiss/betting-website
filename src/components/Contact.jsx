import Logo from '../assets/ball2.png';

const Contact = () => {
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
        <h2>Contact</h2>
        <p>
          The www.up-bet.com project provides all site users with paid
          analytical forecasts for various sports. At the moment, our sports
          analysts are ready to offer predictions for football, basketball,
          baseball, tennis, hockey Attention! We do not accept bets or solicit
          action. Please note that sports betting carries great financial risks.
          Our goal is to provide the most detailed analytics on sporting events.
        </p>
      </section>
    </div>
  );
};

export default Contact;
