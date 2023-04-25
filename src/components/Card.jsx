const Card = ({ time, data }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <p className='card-subtitle'>
          <a href='#'>{time}</a>
        </p>
        {/* <h3 className='h3 card-title'>
          <a href='#'>San miguel</a>
        </h3> */}
        <p className='card-text'>{data}</p>
      </div>
    </div>
  );
};

export default Card;
