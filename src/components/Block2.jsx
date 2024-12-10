import Ball from '../assets/ball.png';
import Chelsea from '../assets/chelsea.svg';
import Liverpool from '../assets/liverpool.svg';
import ManCity from '../assets/manchester-city.svg';
import Arsenal from '../assets/arsenal.svg';

const Block2 = () => {
  const items = [
    {
      id: 1,
      title: 'Premier League',
      date: 'Feb 2,',
      time: '00:00',
      teamLogo1: Chelsea,
      teamLogo2: Liverpool,
      teamName1: 'Chelsea',
      teamName2: 'Liverpool',
      coefficients: [
        { number: 1, keff: 1.87 },
        { number: 'X', keff: 2.67 },
        { number: 2, keff: 3.57 },
      ],
    },
    {
      id: 2,
      title: 'Premier League',
      date: 'Feb 4,',
      time: '00:00',
      teamLogo1: ManCity,
      teamLogo2: Arsenal,
      teamName1: 'ManCity',
      teamName2: 'Arsenal',
      coefficients: [
        { number: 1, keff: 1.87 },
        { number: 'X', keff: 2.67 },
        { number: 2, keff: 3.57 },
      ],
    },
    {
      id: 3,
      title: 'Premier League',
      date: 'Feb 6,',
      time: '00:00',
      teamLogo1: Chelsea,
      teamLogo2: ManCity,
      teamName1: 'Chelsea',
      teamName2: 'ManCity',
      coefficients: [
        { number: 1, keff: 1.87 },
        { number: 'X', keff: 2.67 },
        { number: 2, keff: 3.57 },
      ],
    },
    {
      id: 4,
      title: 'Premier League',
      date: 'Feb 8,',
      time: '00:00',
      teamLogo1: Liverpool,
      teamLogo2: Arsenal,
      teamName1: 'Liverpool',
      teamName2: 'Arsenal',
      coefficients: [
        { number: 1, keff: 1.87 },
        { number: 'X', keff: 2.67 },
        { number: 2, keff: 3.57 },
      ],
    },
  ];
  return (
    <div className='match-cards-container'>
      {items.map((item) => (
        <div
          className='match-card'
          key={item.id}
        >
          <div className='card-header'>
            <div className='logo-container'>
              <img
                src={Ball}
                alt='Ball Logo'
                className='ball-logo'
              />
              <p className='league-name'>{item.title}</p>
            </div>
            <p className='match-date'>
              {item.date} <span>{item.time}</span>
            </p>
          </div>
          <div className='card-body'>
            <div className='teams'>
              <div className='teams-left'>
                <img
                  src={item.teamLogo1}
                  alt='Team Logo'
                  className='team-logo'
                />
                <p className='team-name'>{item.teamName1}</p>
              </div>
              <span className='vs'>vs</span>
              <div className='teams-right'>
                <img
                  src={item.teamLogo2}
                  alt='Team Logo'
                  className='team-logo'
                />
                <p className='team-name'>{item.teamName2}</p>
              </div>
            </div>
            <div className='odds'>
              <span className='odds-item'>
                {item.coefficients[0].number}&nbsp;&nbsp;{' '}
                <span>{item.coefficients[0].keff}</span>
              </span>
              <span className='odds-item'>
                {item.coefficients[1].number}&nbsp;&nbsp;{' '}
                <span>{item.coefficients[1].keff}</span>
              </span>
              <span className='odds-item'>
                {item.coefficients[2].number}&nbsp;&nbsp;{' '}
                <span>{item.coefficients[2].keff}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block2;
