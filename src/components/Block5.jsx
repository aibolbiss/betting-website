import Check from '../assets/check.png';

const Block5 = () => {
  const items = [
    { id: 1, type: 'Parlay', odds: '6,43' },
    { id: 2, type: 'Parlay', odds: '5,97' },
    { id: 3, type: 'Parlay', odds: '6,15' },
    { id: 4, type: 'Parlay', odds: '6,91' },
    { id: 5, type: 'Parlay', odds: '6,07' },
  ];
  return (
    <div
      className='table-block'
      id='statistics'
    >
      <h2>Statistics</h2>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Odds</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.odds}</td>
              <td>
                <img
                  src={Check}
                  alt='Check'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Block5;
