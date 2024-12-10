import { Link } from 'react-router-dom';
import MasterCard from '../assets/mastercard.svg';
import Visa from '../assets/visa.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-block'>
        <div className='footer-cards'>
          <img
            src={MasterCard}
            alt='MasterCard'
          />
          <img
            src={Visa}
            alt='Visa'
          />
        </div>
        <div className='footer-menu'>
          <Link to='/about'>About us</Link>
          <Link to='/contact'>Contact us</Link>
          <Link to='/offer'>Public offer</Link>
          <Link to='/payment'>Payment methods</Link>
        </div>
        <div className='footer-text'>
          <p>
            Attention! www.up-bet.com does not accept bets and does not play for
            money, but exclusively provides advisory services in the form of
            predictions of the results of sporting events with conditions &nbsp;
            <Link to='/offer'>Offers</Link>.
          </p>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>Copyright ©2024, MAXXBET360. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
