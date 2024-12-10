import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpg';

const Block6 = () => {
  const items = [
    {
      id: 1,
      title: ' We work more than 7 years',
      subtitle:
        'A team of professional analysts works every day, 2 analysts for each sport. These are former employees of the bookmakers.',
      image: Image1,
    },
    {
      id: 2,
      title: 'Over 3,500 real reviews',
      subtitle:
        'On the site you will find more than 3,500 reviews, earnings screenshots, reviews. We do not hide a single review and a lost bet, we are open to everyone.',
      image: Image2,
    },
    {
      id: 3,
      title: 'Support 24 hours, 7 days a week.',
      subtitle:
        'The Upbet team employs over 22 people, and they are all ready to help you! Managers, consultants, forecasters, analysts, programmers, etc.',
      image: Image3,
    },
    {
      id: 4,
      title: 'We do not work with bookmakers',
      subtitle:
        'Our goal is for our client to win! We only offer the most proven sports analytics!',
      image: Image4,
    },
  ];
  return (
    <>
      <h2
        className='guarantee'
        id='guarantee'
      >
        Guarantee
      </h2>
      <div className='block-with-cards'>
        {items.map((item) => (
          <div
            className='block-with-card'
            key={item.id}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className='block-card-content'>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Block6;
