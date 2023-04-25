import { useState } from 'react';
import axios from 'axios';

const InputTask = ({ hiddenHandler, setDataHandler }) => {
  const [startDate, setStartDate] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [extra, setExtra] = useState('');
  const [city, setCity] = useState('');

  const fetchData = async (startDate, days, extra, city) => {
    // fetch data using inputs given
    const options = {
      method: 'POST',
      url: 'https://chatgpt-api7.p.rapidapi.com/ask',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cb09d8c2a2msh7a395da94095bd0p1d3f25jsn6e18b9bb6db0',
        'X-RapidAPI-Host': 'chatgpt-api7.p.rapidapi.com',
      },
      data: {
        query: `Give me a detailed tourism plan for ${days} days starting from ${startDate} in ${city}. The result must consist of object of the form "[{"id":" ", "Morning": " ", "Afternoon": " ", "Evening": " "}]". The number of objects should be equal to ${days}. The id should be serial wise and also consider ${extra}. The JSON string should be properly formatted and complete. Every task should be in five words only`,
      },
    };

    try {
      const response = await axios.request(options);
      if (response) {
        console.log(response.data.response);
        const jsonArray = JSON.parse(response.data.response);
        setDataHandler(jsonArray);
        hiddenHandler();
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (startDate && lastDate && city) {
      let d1 = new Date(startDate);
      let d2 = new Date(lastDate);
      let diff = d2.getTime() - d1.getTime();
      let days = (diff / (1000 * 3600 * 24)).toFixed(0);
      console.log(days);
      fetchData(startDate, days, extra, city);
      // const data = await fetchData(startDate, days, extra, city);
      // if (data) {
      // hiddenHandler();
      // }
    }
    console.log(city, startDate, lastDate, extra);
  };

  return (
    <div>
      <section className='tour-search' id='tour-search'>
        <div className='container'>
          <form action='' className='tour-search-form' onSubmit={submitHandler}>
            <div className='input-wrapper'>
              <label htmlFor='destination' className='input-label'>
                City
              </label>

              <input
                type='text'
                name='destination'
                id='destination'
                required
                placeholder='Enter Destination'
                className='input-field'
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className='input-wrapper'>
              <label htmlFor='extra' className='input-label'>
                Things to consider
              </label>

              <input
                type='text'
                name='extra'
                id='extra'
                // required
                placeholder=' If Any'
                className='input-field'
                onChange={(e) => setExtra(e.target.value)}
              />
            </div>

            <div className='input-wrapper'>
              <label htmlFor='checkin' className='input-label'>
                Start Date
              </label>

              <input
                type='date'
                name='checkin'
                id='checkin'
                required
                className='input-field'
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className='input-wrapper'>
              <label htmlFor='checkout' className='input-label'>
                Last Date
              </label>

              <input
                type='date'
                name='checkout'
                id='checkout'
                required
                className='input-field'
                onChange={(e) => setLastDate(e.target.value)}
              />
            </div>

            <button type='submit' className='btn btn-secondary'>
              Get Your Plan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default InputTask;
