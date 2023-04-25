import React from 'react';
import Card from './Card';

const Plan = ({ data }) => {
  return (
    <div>
      <div className='popular-card'>
        <figure className='card-img'></figure>
        <div className='card-container'>
          <div>
            <h1 className='card-heading'>Day-{data.id}</h1>
            <Card time='MORNING' data={data.Morning} />
            <Card time='AFTERNOON' data={data.Afternoon} />
            <Card time='EVENING' data={data.Evening} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
