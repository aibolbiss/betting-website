import Logo from '../assets/ball2.png';

const About = () => {
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
        <h2>About us</h2>
        <p>
          The www.up-bet.com project provides all site users with paid
          analytical forecasts for various sports. At the moment, our sports
          analysts are ready to offer predictions for football, basketball,
          baseball, tennis, hockey Attention! We do not accept bets or solicit
          action. Please note that sports betting carries great financial risks.
          Our goal is to provide the most detailed analytics on sporting events.
        </p>
      </section>
      <section>
        <h2>Data protection</h2>
        <p>
          The www.up-bet.com project conducts business according to world
          standards and strives to create trusting relationships. Therefore, we
          take care of the safety of our customers data. We guarantee the
          confidentiality of the information you provide, such as email and
          other data that you indicate on the site or transfer to the project.
          Such information is not subject to disclosure or transfer to third
          parties. You can be confident in the safety of your financial
          transactions. All transactions occur through encrypted channels, are
          stored in a secure archive and are inaccessible to third parties.
          Purchase information is not subject to disclosure unless such
          information is requested through formal requests from regulatory
          authorities. If you have any questions regarding information security,
          please contact the online support service or send an email
        </p>
      </section>
    </div>
  );
};

export default About;
