import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";
import img1 from "../components/Images/Dashboard.svg";
import img2 from "../components/Images/Loan.svg";
import img3 from "../components/Images/Payment.svg";
import img4 from "../components/Images/Transaction.svg";
import { AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../context/auth-context";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const SideDrawer = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('/app/users/dashboard');
  const history = useHistory();
  const auth = useContext(AuthContext);

  const username = localStorage.getItem("user");

  const logoutHandler = () => {
    history.push("/");
    auth.logout();
  };

  return (
    <>
      <nav className="">
        <div className="fixed items-start hidden px-8 bg-white group lg:flex ">
          <div className="flex flex-col items-start justify-between h-[100vh]">
            <div className="flex-col items-start justify-between">
              <div className="flex items-center py-8">
                <img
                  className="w-[50px] h-[50px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABdFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASERIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRSkVrZGSBblv/3Lb/69L+T2AAAABCQ03/8+ToSFf/bXpNTln+WGY+P0g2N0AhHxxISVQJCAnu28QcHCAwMTknJy386ND/37r/3LH7TV52MjgrLDIjIyltIikWFhf/anf2TV3zS1tAOzT+8N3f0L3/YG/rSFgUBwmoND82MixUGh80EhUnDhH/7dbCs6D+VWV0bGLuTFviRVTLPky0OEScMDqTLTaHKjM5NTFdHSLEu6/ry6r/16fxyp2om4rRsIick4aSi4K7nXqQhXb3aXb/ZXN6dG3dXmq5T1htYlR4Z1OlRk9aJistJh0oIxxCGBwbCgvYx7K+tardwaH+qZjIVWCwS1RbTUFGQz9nLDFNISVTPMBqAAAAJXRSTlMA+5gMLbvu50sj9dT+r5+RbBiKhFwFxbSoRRLcznliOzO47VFQu8KikAAAAzhJREFUWMPtlldb2zAUhi0SsjezQKEzX5wEm7iGUJo2hTSUvfdeLXt1jz9fS09aliwrXPe9zfO9OudIsaTY01EXbvMEPJ5gOOFzKdUSj3pxDdIYq8rhigYAYhZ0LZXS9IJpAAjUyCsetQIhPZe9QqcKn2z+QQCGXknmcrmUBc0j6pZcP4BQrpJOVTAJKEGZIuLeSp6mr9D0niKAprijoBkGJ8/QTcDrdhoAoPPzTGHA42CohWmTZ2gGWltEeTegCfKshrBIUIciLcBa6hb/DCYCDQJBEAUrr5kGbmGYOsvrwENBvgVIZbPdBBxIgQqKqBXvAclmC8DIZvnFDcqbI0CP1RnQIRLEEMpqwPTE8zvkjwA91Q2vIp6hmTXxU1WfcwwlFFMFNAoFCZg5glVLwGESROsRj0CpwWsNhsoX5A3oEgIdXVTAowvd/wXOgqiToIBmoaAdhliQehwXXwheEKHgSYPTJ9kLkeCxxKWUQMgSTPAEIXQozviBd6r6jneUAbfMvUhQ5vfwCUTqemzDDr+HPQQVGepQUrklLKNOSuAn+KxypjBJRyBFGMvqXUN+hF4IsiXs3zVMg/gVSWLAtnprDttATJEmAuzfMOSngRr5PDMsr14JJkc4eTExApR2ynlr8fJeCQjElCrxN4FSLIIS9itV4wbOwDg7fqrcg3qcr29s7e5ubay/fHaPfEMbjnpfMnrXirUN1eZdzYBx/KWXsWag2VXF2m5fe8ILjAPoKpXOf3ydWQC8iXafW2p2EQ8oQ98zJ2OgXA6k08NDoHgiTg5XhABk/OL05EMmkxlMzy8szKctQXp2cWVsnP4WEfbiDwK/D2mW0Zlk9KcrzA5fAEHBkWhpxdBh5i9vB5MVaAkM1kvQ/p3YhMuDSrZzKnmdvr7+gffMMDeEJru8D+Qbi3cmufQzxTzwwEbQiF80/zFpR98MNazYPZPiwAHLC6CGOZC4zeEfo/UnRfTRLsZRzxU8xCnbOhFsS0dtHrtRvGIFiLFKeIMo/3VCBYNOggEqqLEXdNrEFpeWluZYD/cTLMJijI3RQTDFF8yujI6ODksKxIgF1n/Akf73doJ6j0+Rwue5dpD+AJzqSVyrwUKjAAAAAElFTkSuQmCC"
                  alt="user avatar"
                />
                <span>{username}</span>
              </div>
              <ul className="flex group-visited:text-blue-500 flex-col items-start justify-between h-[25vh]">
                <li>
                  <Link to="/app/users/dashboard" className={`flex ${activeLink === '/app/users/dashboard' ? 'text-blue-500' : ''}`} onClick={() => setActiveLink('/app/users/dashboard')}>
                    <img src={img1} alt="dashboard" />
                    <span className="ml-2"> DashBoard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/users/loan" className={`flex ${activeLink === '/app/users/loan' ? 'text-blue-500' : ''}`} onClick={() => setActiveLink('/app/users/loan')}>
                    <img src={img2} alt="loan" />{" "}
                    <span className="ml-2">Loan</span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/users/payment" className={`flex ${activeLink === '/app/users/payment' ? 'text-blue-500' : ''}`} onClick={() => setActiveLink('/app/users/payment')}>
                    <img src={img3} alt="payment" />{" "}
                    <span className="ml-2">Payment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/users/history" className={`flex ${activeLink === '/app/users/history' ? 'text-blue-500' : ''}`} onClick={() => setActiveLink('/app/users/history')}>
                    <img src={img4} alt="history" />{" "}
                    <span className="ml-2">Transaction History </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onClick={logoutHandler}
              className="flex items-center mb-4 text-red-500"
            >
              <AiOutlineLogout className="icon" />
              <span>LOGOUT</span>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-end py-8 pl-8 pr-8 md:pr-0 lg:hidden">
          <ul
            onClick={() => setNav(!nav)}
            className={` absolute top-[63px] z-20 bg-gray-50 items-center w-full left-0 py-10 text-sky h-[90vh] ${
              nav ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-between text-lg h-[350px]">
              <li>
                <Link to="/app/users/dashboard" className="flex">
                  <img src={img1} alt="dashboard" />
                  <span className="ml-2"> DashBoard</span>
                </Link>
              </li>
              <li>
                <Link to="/app/users/loan" className="flex">
                  <img src={img2} alt="loan" />{" "}
                  <span className="ml-2">Loan</span>
                </Link>
              </li>
              <li>
                <Link to="/app/users/payment" className="flex">
                  <img src={img3} alt="payment" />{" "}
                  <span className="ml-2">Payment</span>
                </Link>
              </li>
              <li>
                <Link to="/app/users/history" className="flex">
                  <img src={img4} alt="history" />{" "}
                  <span className="ml-2">Transaction History </span>
                </Link>
              </li>
              <li
                onClick={logoutHandler}
                className="flex items-center px-4 py-2 text-red-500 bg-white rounded-xl "
              >
                <AiOutlineLogout className="icon" />
                <span>LOGOUT</span>
              </li>
              <li className="px-4 py-2 text-white bg-black rounded-xl">
                <div className="flex items-center">
                  <img
                    className="w-[20px] h-[20px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABdFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASERIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRSkVrZGSBblv/3Lb/69L+T2AAAABCQ03/8+ToSFf/bXpNTln+WGY+P0g2N0AhHxxISVQJCAnu28QcHCAwMTknJy386ND/37r/3LH7TV52MjgrLDIjIyltIikWFhf/anf2TV3zS1tAOzT+8N3f0L3/YG/rSFgUBwmoND82MixUGh80EhUnDhH/7dbCs6D+VWV0bGLuTFviRVTLPky0OEScMDqTLTaHKjM5NTFdHSLEu6/ry6r/16fxyp2om4rRsIick4aSi4K7nXqQhXb3aXb/ZXN6dG3dXmq5T1htYlR4Z1OlRk9aJistJh0oIxxCGBwbCgvYx7K+tardwaH+qZjIVWCwS1RbTUFGQz9nLDFNISVTPMBqAAAAJXRSTlMA+5gMLbvu50sj9dT+r5+RbBiKhFwFxbSoRRLcznliOzO47VFQu8KikAAAAzhJREFUWMPtlldb2zAUhi0SsjezQKEzX5wEm7iGUJo2hTSUvfdeLXt1jz9fS09aliwrXPe9zfO9OudIsaTY01EXbvMEPJ5gOOFzKdUSj3pxDdIYq8rhigYAYhZ0LZXS9IJpAAjUyCsetQIhPZe9QqcKn2z+QQCGXknmcrmUBc0j6pZcP4BQrpJOVTAJKEGZIuLeSp6mr9D0niKAprijoBkGJ8/QTcDrdhoAoPPzTGHA42CohWmTZ2gGWltEeTegCfKshrBIUIciLcBa6hb/DCYCDQJBEAUrr5kGbmGYOsvrwENBvgVIZbPdBBxIgQqKqBXvAclmC8DIZvnFDcqbI0CP1RnQIRLEEMpqwPTE8zvkjwA91Q2vIp6hmTXxU1WfcwwlFFMFNAoFCZg5glVLwGESROsRj0CpwWsNhsoX5A3oEgIdXVTAowvd/wXOgqiToIBmoaAdhliQehwXXwheEKHgSYPTJ9kLkeCxxKWUQMgSTPAEIXQozviBd6r6jneUAbfMvUhQ5vfwCUTqemzDDr+HPQQVGepQUrklLKNOSuAn+KxypjBJRyBFGMvqXUN+hF4IsiXs3zVMg/gVSWLAtnprDttATJEmAuzfMOSngRr5PDMsr14JJkc4eTExApR2ynlr8fJeCQjElCrxN4FSLIIS9itV4wbOwDg7fqrcg3qcr29s7e5ubay/fHaPfEMbjnpfMnrXirUN1eZdzYBx/KWXsWag2VXF2m5fe8ILjAPoKpXOf3ydWQC8iXafW2p2EQ8oQ98zJ2OgXA6k08NDoHgiTg5XhABk/OL05EMmkxlMzy8szKctQXp2cWVsnP4WEfbiDwK/D2mW0Zlk9KcrzA5fAEHBkWhpxdBh5i9vB5MVaAkM1kvQ/p3YhMuDSrZzKnmdvr7+gffMMDeEJru8D+Qbi3cmufQzxTzwwEbQiF80/zFpR98MNazYPZPiwAHLC6CGOZC4zeEfo/UnRfTRLsZRzxU8xCnbOhFsS0dtHrtRvGIFiLFKeIMo/3VCBYNOggEqqLEXdNrEFpeWluZYD/cTLMJijI3RQTDFF8yujI6ODksKxIgF1n/Akf73doJ6j0+Rwue5dpD+AJzqSVyrwUKjAAAAAElFTkSuQmCC"
                    alt="user avatar"
                  />
                  <span>{username}</span>
                </div>
              </li>
            </div>
          </ul>
          <div
            className="block text-3xl text-white lg:hidden"
            onClick={() => setNav(!nav)}
          >
            {!nav ? (
              <CiMenuBurger className="text-black" />
            ) : (
              <TfiClose className="text-black" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideDrawer;
