import React from 'react';

const Footer = () => {
  return (
    <div>
      \
      <footer className='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='footer-brand'>
              <a href='#' className='logo'>
                <img
                  style={{ width: 80 }}
                  src='../public/images/g20.png'
                  alt='India logo'
                />
              </a>
              <p className='footer-text'>
                Urna ratione ante harum provident, eleifend, vulputate molestiae
                proin fringilla, praesentium magna conubia at perferendis,
                pretium, aenean aut ultrices.
              </p>
            </div>
            <div className='footer-contact'>
              <h4 className='contact-title'>Contact Us</h4>
              <p className='contact-text'>
                Feel free to contact and reach us !!
              </p>
              <ul>
                <li className='contact-item'>
                  <ion-icon name='call-outline' />
                  <a href='tel:+01123456790' className='contact-link'>
                    +91 230932093
                  </a>
                </li>
                <li className='contact-item'>
                  <ion-icon name='mail-outline' />
                  <a href='mailto:info.India.com' className='contact-link'>
                    info.India.com
                  </a>
                </li>
                <li className='contact-item'>
                  <ion-icon name='location-outline' />
                  <address> DTU, Delhi</address>
                </li>
              </ul>
            </div>
            <div className='footer-form'>
              <p className='form-text'>
                Subscribe our newsletter for weekly india
              </p>
              <form action='' className='form-wrapper'>
                <input
                  type='email'
                  name='email'
                  className='input-field'
                  placeholder='Enter Your Email'
                  required=''
                />
                <button type='submit' className='btn btn-secondary'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <p className='copyright'>
              © 2023 <a href=''>Heritage India</a>. All rights reserved
            </p>
            <ul className='footer-bottom-list'>
              <li>
                <a href='#' className='footer-bottom-link'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='footer-bottom-link'>
                  Term &amp; Condition
                </a>
              </li>
              <li>
                <a href='#' className='footer-bottom-link'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
