import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className='header'>
        <div className='header-content'>
          <div className='logo-navigation'>
            {/* Логотип */}
            <div className='logo'>
              <Link to='/'>
                maxx<span>bet360</span>
              </Link>
            </div>
            {/* Навигация */}
            <nav className='navigation'>
              <a href='#statistics'>Statistics</a>
              <a href='#guarantee'>Guarantee</a>
              <Link to='/about'>About us</Link>
              <Link to='/contact'>Contact us</Link>
            </nav>
            <div
              className={`burger-menu ${isActive ? 'active' : ''}`}
              onClick={handleClick}
            >
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
          </div>
          {/* Правый блок */}
          <div className='header-right'>
            {/* Кнопки */}
            <button className='btn login'>Login</button>
            <button className='btn register'>Sign Up</button>
          </div>
        </div>
      </header>
      <nav className={`nav-mobile  ${isActive ? '' : 'open'}`}>
        <a href='#statistics'>Statistics</a>
        <a href='#guarantee'>Guarantee</a>
        <Link to='/about'>About us</Link>
        <Link to='/contact'>Contact us</Link>
      </nav>
    </>
  );
};

export default Header;
