import { useNavigate } from 'react-router-dom';

const Block3 = () => {
  const items = [
    {
      id: 1,
      title: '1 sports prediction with a discount of 50%*',
      subtitle: 'Odds:',
      number: 6,
      oldPrice: 290,
      newPrice: 149,
    },
    {
      id: 2,
      title: '1 sports prediction',
      subtitle: 'Odds:',
      number: 6,
      newPrice: 290,
    },
  ];
  const navigate = useNavigate();
  const handleBuyClick = (newPrice) => {
    navigate('/pay', { state: { newPrice } });
  };

  return (
    <div className='cards-container'>
      {items.map((item) => (
        <div
          className='card'
          key={item.id}
        >
          <div
            className={`card-background ${
              item.id === 2 ? 'card-background2' : ''
            }`}
          >
            <div className='card-content'>
              <h3>{item.title}</h3>
              <h4>
                {item.subtitle} {item.number}
              </h4>
              <p className='price'>
                <span
                  className='old-price'
                  style={
                    item.id === 2 ? { display: 'none' } : { display: 'block' }
                  }
                >
                  {item.oldPrice}$
                </span>
                <span className='new-price'>{item.newPrice}$</span>
              </p>
              <button
                onClick={() => handleBuyClick(item.newPrice)}
                className='btn-buy'
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block3;
