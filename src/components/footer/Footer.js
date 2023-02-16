import React from 'react';
import logo from '../Images/FooterImg.svg';

import './Footer.css';

const Footer = () => {
  return <React.Fragment>
    <div className="display" >
      <footer id="footer" class="footerr clear">
        <ul class="footer__nav">
          <li class="footer__item">
            <h6>
             <img src={logo} alt='logo' />
            </h6>
            <p>support@quickcredit.com.ng</p>
          </li>
          <li class="footer__item">
            <h6>Contact</h6>
            <p>Landline : +234(0) 903 414 4706</p>
            <p>Mobile : +234(0) 811 134 6797</p>
            <p>
              Office Address : 43, Churchgate Street, (Nurses House) Victoria
              Island, Lagos Nigeria
            </p>
          </li>
          <li class="footer__item">
            <h6>Legal</h6>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </li>
          <li class="footer__item">
            <h6>Connect</h6>
            <p>Facebook</p>
            <p>Whatsapp</p>
            <p>Linkedin</p>
            <p>Twitter</p>
          </li>
        </ul>
      </footer>
    </div>
  </React.Fragment>
}

export default Footer;
