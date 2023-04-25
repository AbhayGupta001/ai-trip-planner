import Header from './components/Header';
import InputTask from './components/InputTask';
import PersonalizedPlan from './components/PersonalizedPlan';
import Footer from './components/Footer';

import { useState } from 'react';

const DUMMY_DATA = [
  {
    cityName: 'Delhi',
    days: {
      Days: [
        {
          id: 1,
          Morning:
            'Visit the iconic Red Fort and learn about the history of the Mughal Empire',
          Afternoon:
            'Explore the Jama Masjid, one of the largest mosques in India',
          Evening:
            'Take a stroll through Chandni Chowk, one of the oldest and busiest markets in Delhi',
        },
        {
          id: 2,
          Morning:
            'Visit the India Gate and pay tribute to the Indian soldiers who died in World War I',
          Afternoon: 'Explore the Rashtrapati Bhavan and the Parliament House',
          Evening: 'Watch a sound and light show at the Purana Qila',
        },
        {
          id: 3,
          Morning:
            "Visit the Lotus Temple, a Bahá'í House of Worship known for its unique architecture",
          Afternoon: "Explore the Humayun's Tomb, a UNESCO World Heritage Site",
          Evening: 'Visit the Hauz Khas Village and enjoy the nightlife',
        },
        {
          id: 4,
          Morning: 'Take a day trip to Agra and visit the iconic Taj Mahal',
          Afternoon: 'Explore the Agra Fort, a UNESCO World Heritage Site',
          Evening:
            'Enjoy a cultural show at Kalakriti Cultural and Convention Center',
        },
        {
          id: 5,
          Morning: 'Take a day trip to Jaipur, known as the Pink City',
          Afternoon: 'Visit the City Palace and the Hawa Mahal',
          Evening:
            'Experience the local cuisine at a traditional Rajasthani restaurant',
        },
        {
          id: 6,
          Morning:
            'Visit the Akshardham Temple, a Hindu temple known for its intricate carvings and architecture',
          Afternoon:
            'Explore the National Museum, which houses a vast collection of Indian artifacts',
          Evening: 'Watch a Bollywood movie at a local theater',
        },
        {
          id: 7,
          Morning:
            'Take a day trip to Mathura and Vrindavan, the birthplace of Lord Krishna',
          Afternoon: 'Visit the Banke Bihari Temple and the Iskcon Temple',
          Evening: 'Attend the evening aarti at the Yamuna River',
        },
        {
          id: 8,
          Morning:
            'Visit the Qutub Minar, a UNESCO World Heritage Site and the tallest brick minaret in the world',
          Afternoon:
            'Explore the Mehrauli Archaeological Park and the Jahaz Mahal',
          Evening: 'Enjoy a picnic at the Lodi Gardens',
        },
        {
          id: 9,
          Morning:
            'Visit the Swaminarayan Akshardham, a Hindu temple known for its stunning architecture and exhibits',
          Afternoon:
            'Explore the Raj Ghat, the memorial dedicated to Mahatma Gandhi',
          Evening: 'Take a night tour of the city and explore the markets',
        },
        {
          id: 10,
          Morning:
            'Visit the Chhatarpur Temple, a Hindu temple complex known for its intricate carvings',
          Afternoon:
            'Explore the Hauz Khas Complex, which includes a mosque, a water tank, and a tomb',
          Evening:
            'Watch a theatrical performance at the National School of Drama',
        },
        {
          id: 11,
          Morning:
            'Take a day trip to the Neemrana Fort Palace and enjoy a royal experience',
          Afternoon: 'Visit the Sariska National Park and spot some wildlife',
          Evening:
            'Attend a Rajasthani cultural show at the Neemrana Fort Palace',
        },
        {
          id: 12,
          Morning:
            'Visit the Gurudwara Bangla Sahib, a Sikh temple known for its beautiful architecture and community kitchen',
          Afternoon:
            'Explore the Purana Qila, a historic fort built by Sher Shah Suri',
          Evening:
            'Take a stroll through the Lodhi Art District and admire the street art',
        },
        {
          id: 13,
          Morning: 'Visit the Red Fort and explore its museums and galleries',
          Afternoon:
            'Explore the Swaminarayan Akshardham temple complex and its gardens',
          Evening:
            "Enjoy a dinner at the famous Karim's restaurant in Old Delhi",
        },
        {
          id: 14,
          Morning:
            'Take a day trip to the Keoladeo National Park and spot some migratory birds',
          Afternoon: 'Visit the Bharatpur Palace and Museum',
          Evening:
            'Take a walk around the local market and enjoy some street food',
        },
        {
          id: 15,
          Morning:
            'Visit the National Gallery of Modern Art and explore its exhibitions',
          Afternoon:
            'Explore the Mehrauli Archaeological Park and the Qutub Minar',
          Evening:
            'Take a walk around the Connaught Place and enjoy some shopping',
        },
        {
          id: 16,
          Morning:
            'Visit the Tughlaqabad Fort and learn about the history of Delhi',
          Afternoon: 'Explore the Lotus Temple and its surroundings',
          Evening:
            'Attend a classical music concert at the India Habitat Center',
        },
        {
          id: 17,
          Morning: 'Visit the Raj Ghat and pay tribute to Mahatma Gandhi',
          Afternoon: 'Explore the Rajpath and the various government buildings',
          Evening:
            'Take a walk around the India Gate and enjoy some street food',
        },
        {
          id: 18,
          Morning:
            'Take a day trip to the Ranthambore National Park and spot some tigers',
          Afternoon: 'Visit the Ranthambore Fort and explore its history',
          Evening: "Attend a cultural show at the park's amphitheater",
        },
        {
          id: 19,
          Morning: "Visit the Humayun's Tomb and admire its architecture",
          Afternoon: 'Explore the Lodi Gardens and take a walk around the lake',
          Evening:
            'Enjoy a dinner at the famous Bukhara restaurant in the ITC Maurya Hotel',
        },
        {
          id: 20,
          Morning: 'Visit the Chandni Chowk and enjoy some shopping',
          Afternoon:
            'Explore the Gurudwara Sis Ganj Sahib and learn about the Sikh history',
          Evening:
            'Take a walk around the Nizamuddin Dargah and enjoy the qawwali music',
        },
      ],
    },
  },
];

// console.log(data.length);
const allObject = DUMMY_DATA.filter((val) => {
  // checking the type of elements using the typeof operator.
  if (typeof val == 'object') {
    return true;
  } else {
    return false;
  }
});

// const data = allObject[0].days.Days;
// console.log(data);
// const total = allObject[0].days.Days.length;
// console.log(allObject);
// console.log(total);

const App = () => {
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState(null);

  const setDataHandler = (data) => {
    console.log(data);
    setData(data);
  };

  const hiddenHandler = () => {
    setHidden(false);
  };

  return (
    <div>
      <Header />
      <InputTask
        hiddenHandler={hiddenHandler}
        setDataHandler={setDataHandler}
      />
      <PersonalizedPlan data={data} hidden={hidden} />
      <Footer />
    </div>
  );
};

export default App;
