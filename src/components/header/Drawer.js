import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink} from "react-router-hash-link";
import "./Drawer.css";


const Drawer = (props) => {
  return <ul className='drawer'>
  <li><NavHashLink to="#aboutUS" className='drawerStyle'> {props.text1}</NavHashLink></li>
    <li><NavLink to="#process" className='drawerStyle'> {props.text2}</NavLink></li>
    <li><NavLink to="#whyUs" className='drawerStyle'>{props.text3}</NavLink></li>
    <li><NavLink to="#faqs" className='drawerStyle'>{props.text4}</NavLink></li>
    <li><NavLink to="/app/users/login" className='drawerStyle'>{props.text5}</NavLink></li>
    <li><NavLink to="/app/users/registration" className='drawerStyle'>{props.text6}</NavLink></li>
    <li><NavLink to="/"  style={{color: "rgb(240, 1, 1)"}}>{props.text7}</NavLink></li>
  </ul>
}

export default Drawer
