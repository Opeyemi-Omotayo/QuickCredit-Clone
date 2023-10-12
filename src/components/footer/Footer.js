import React from "react";
import logo from "../Images/FooterImg.svg";
import {
  CiFacebook,
  CiInstagram,
  CiYoutube,
} from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import './Footer.css';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-img px-[1rem]" data-aos="fade-up">
      <footer
        id="footer"
        className="font-mono text-black mt-[1rem] pb-[4rem] grid grid-cols-1 lg:flex lg:justify-between sm:grid-cols-2 gap-y-10 lg:gap-y-0 lg:px-10"
      >
        <div>
          <h6>
            <img src={logo} alt="logo" />
          </h6>
          <p >support@quickcredit.com.ng</p>
          <div className="flex py-5 space-x-5 text-xl cursor-pointer">
            <CiFacebook />
            <FiTwitter />
            <CiInstagram />
            <CiYoutube />
            <FaWhatsapp />
          </div>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-bold ">Contact</h1>
          <ul className="space-y-5 cursor-pointer">
            <li>Landline : +234(0) 903 414 4706</li>
            <li>Mobile : +234(0) 811 134 6797</li>
            <li>Office Address : Lagos, Nigeria</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-bold ">Company</h1>
          <ul className="space-y-5 cursor-pointer">
            <li>Legal</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-bold ">Download</h1>
          <ul className="space-y-5 cursor-pointer">
            <li>From App Store or Google Play</li>
          </ul>
        </div>
      </footer>
      </div>
      
    </React.Fragment>
  );
};

export default Footer;
