import { Link } from 'react-router-dom';

const Block4 = () => {
  return (
    <div className='full-width-card'>
      <div className='full-width-card-content'>
        <h2>
          *The discount is provided only on the first purchase for new customers
          of our site
        </h2>
        <p>
          Risk Statement - <Link to='/risks'>Press here</Link>
        </p>
        <div className='yellow-card'>
          <div className='left-yellow-card'>
            <h2>FREE</h2>
          </div>
          <div className='right-yellow-card'>
            <h2>Guarantee</h2>
            <p>1 Free prediction in case of loss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;
