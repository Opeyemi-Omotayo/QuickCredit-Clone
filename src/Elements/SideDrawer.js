import React from 'react';
import { NavLink } from 'react-router-dom';
// import img1 from "../components/Images/Dashboard.svg";
// import  img2 from "../components/Images/Loan.svg";
// import img3 from "../components/Images/Payment.svg";
// import  img4 from "../components/Images/Transaction.svg";

import './SideDrawer.css';

const SideDrawer = () => {
  return (
<React.Fragment>
<aside className="side-drawer" >
<div>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABdFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASERIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRSkVrZGSBblv/3Lb/69L+T2AAAABCQ03/8+ToSFf/bXpNTln+WGY+P0g2N0AhHxxISVQJCAnu28QcHCAwMTknJy386ND/37r/3LH7TV52MjgrLDIjIyltIikWFhf/anf2TV3zS1tAOzT+8N3f0L3/YG/rSFgUBwmoND82MixUGh80EhUnDhH/7dbCs6D+VWV0bGLuTFviRVTLPky0OEScMDqTLTaHKjM5NTFdHSLEu6/ry6r/16fxyp2om4rRsIick4aSi4K7nXqQhXb3aXb/ZXN6dG3dXmq5T1htYlR4Z1OlRk9aJistJh0oIxxCGBwbCgvYx7K+tardwaH+qZjIVWCwS1RbTUFGQz9nLDFNISVTPMBqAAAAJXRSTlMA+5gMLbvu50sj9dT+r5+RbBiKhFwFxbSoRRLcznliOzO47VFQu8KikAAAAzhJREFUWMPtlldb2zAUhi0SsjezQKEzX5wEm7iGUJo2hTSUvfdeLXt1jz9fS09aliwrXPe9zfO9OudIsaTY01EXbvMEPJ5gOOFzKdUSj3pxDdIYq8rhigYAYhZ0LZXS9IJpAAjUyCsetQIhPZe9QqcKn2z+QQCGXknmcrmUBc0j6pZcP4BQrpJOVTAJKEGZIuLeSp6mr9D0niKAprijoBkGJ8/QTcDrdhoAoPPzTGHA42CohWmTZ2gGWltEeTegCfKshrBIUIciLcBa6hb/DCYCDQJBEAUrr5kGbmGYOsvrwENBvgVIZbPdBBxIgQqKqBXvAclmC8DIZvnFDcqbI0CP1RnQIRLEEMpqwPTE8zvkjwA91Q2vIp6hmTXxU1WfcwwlFFMFNAoFCZg5glVLwGESROsRj0CpwWsNhsoX5A3oEgIdXVTAowvd/wXOgqiToIBmoaAdhliQehwXXwheEKHgSYPTJ9kLkeCxxKWUQMgSTPAEIXQozviBd6r6jneUAbfMvUhQ5vfwCUTqemzDDr+HPQQVGepQUrklLKNOSuAn+KxypjBJRyBFGMvqXUN+hF4IsiXs3zVMg/gVSWLAtnprDttATJEmAuzfMOSngRr5PDMsr14JJkc4eTExApR2ynlr8fJeCQjElCrxN4FSLIIS9itV4wbOwDg7fqrcg3qcr29s7e5ubay/fHaPfEMbjnpfMnrXirUN1eZdzYBx/KWXsWag2VXF2m5fe8ILjAPoKpXOf3ydWQC8iXafW2p2EQ8oQ98zJ2OgXA6k08NDoHgiTg5XhABk/OL05EMmkxlMzy8szKctQXp2cWVsnP4WEfbiDwK/D2mW0Zlk9KcrzA5fAEHBkWhpxdBh5i9vB5MVaAkM1kvQ/p3YhMuDSrZzKnmdvr7+gffMMDeEJru8D+Qbi3cmufQzxTzwwEbQiF80/zFpR98MNazYPZPiwAHLC6CGOZC4zeEfo/UnRfTRLsZRzxU8xCnbOhFsS0dtHrtRvGIFiLFKeIMo/3VCBYNOggEqqLEXdNrEFpeWluZYD/cTLMJijI3RQTDFF8yujI6ODksKxIgF1n/Akf73doJ6j0+Rwue5dpD+AJzqSVyrwUKjAAAAAElFTkSuQmCC" alt="user avatar"/>
</div>
<ul>
  <NavLink to="/app/users/dashboard"> DashBoard</NavLink>
  <NavLink  to="/app/users/loans">Loan</NavLink>
  <NavLink  to="/app/users/payment">Payment</NavLink>
  <NavLink  to="/app/users/history">TransactionHistory</NavLink>
</ul>
</aside>
</React.Fragment>
  );
};

export default SideDrawer;
