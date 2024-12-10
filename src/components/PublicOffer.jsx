import Logo from '../assets/ball2.png';

const PublicOffer = () => {
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
        <h2>1. Terms and definitions</h2>
        <p>
          This document is an offer from LTD (hereinafter referred to as the
          Contractor) to conclude an Agreement for the provision of consulting
          services on the conditions set out below. The list of services and the
          cost of services are contained in the price list posted on the website
          http://up-bet.com Offer - this document Offer for the provision of
          consulting services published on the Internet at: http://up-bet.com
          Offer Acceptance - full unconditional acceptance of the Offer by
          performing the actions specified in Section 6 of the Offer. An
          Agreement is concluded by the acceptance of the Offer. Agreement - a
          paid agreement between the Customer and the Contractor for the
          provision of consulting services, which is concluded through the Offer
          Acceptance. Customer - the person who accepted the Offer and is thus
          the Customer of the Contractors services under the concluded
          Agreement. Price List - the current list of paid services provided by
          the Contractor with prices, published on the Internet at:
          http://up-bet.com
        </p>
      </section>
      <section>
        <h2>2. Subject of the Agreement</h2>
        <p>
          2.1. The subject of the Agreement is the provision of remunerated
          provision of advisory services by the Contractor to the Customer in
          the form of predictions of the results of sports events on the terms
          of the Offer. 2.2. The volume of services provided depends on the
          service package chosen by the Customer on the website
          http://up-bet.com/ Types of service packages: 1 prediction (a type of
          prediction in which several events must come true at once) for new
          clients; 1 prediction (a type of prediction in which several events
          must come true at once) for regular customers; Access to predictions
          (Predictions for 3-5 games are provided every day, winning all games
          is optional) for 30 days; Periodic subscriptions to individual
          championships or individual events
        </p>
      </section>
    </div>
  );
};

export default PublicOffer;
