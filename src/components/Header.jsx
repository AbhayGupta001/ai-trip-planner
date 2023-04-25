import React from 'react';

const Header = () => {
  return (
    <div className='header1'>
      <div className='navbar'>
        <a href='' className='brand'>
          <img src='../public/images/g20.png' />
          INDIA
        </a>
        <div className='navlinks'>
          <ul>
            <li>
              <a href=''>HOME</a>
            </li>
            <li>
              <a href=''>ABOUT US</a>
            </li>
            <li>
              <a href=''>MEDICAL TOURISM</a>
            </li>
            <li>
              <a href=''>GALLERY</a>
            </li>
          </ul>
        </div>
      </div>
      <section className='section'>
        <h1 className='hero__heading'>DISCOVER THE MAGIC OF INDIA</h1>
        <button className='btn btn-primary btn1'>
          <a href='#tour-search'>Get Your Plan</a>
        </button>
      </section>
    </div>
  );
};

export default Header;
