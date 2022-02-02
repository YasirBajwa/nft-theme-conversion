import React from "react";
import Logo from "./../utils/img/logos/Logo.svg";
import MetaMask from "./../utils/img/icons/metamask.svg";
import { useNavigate } from 'react-router-dom';


export const Header = () => {
  const navigate = useNavigate();
  return (
    
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
    <div class="container">
      <div className="header__logo">
          <a >
            <img
              className="header__logo"
              id="logo_js"
              src={Logo}
              alt="logo"
            />
          </a>
        </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
        <i class="fas fa-bars"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <header className="header__1 js-header" id="header">
    <div className="container">
      <div className="wrapper js-header-wrapper">
      
        <div className="header__menu">
          <ul className="d-flex space-x-20">
            <li className="has_popup">
              <a className="color_black" onClick={() =>navigate("/")}>
                Home
              </a>
            
            </li>
            <li>
              <a className="color_black"  onClick={() =>navigate("/market")}>
                {" "}
                Marketplace
              </a>
            </li>
            <li>
              <a className="color_black" onClick={() =>navigate("/collections")}>
                {" "}
                Collections
              </a>
            </li>
            <li>
              <a className="color_black" onClick={() =>navigate("/edit-profile")}>
                {" "}
                Profile
              </a>
            </li>
            <li>
              <a className="color_black" onClick={() =>navigate("/creators")}>
                {" "}
                Creators
              </a>
            </li>
            <li>
              <a className="color_black" onClick={() =>navigate("/blog")}>
                {" "}
                Blog{" "}
              </a>
            </li>
            <li >
              <a className="color_black " onClick={() =>navigate("/live-auction")}>
                Live Auction 
              </a>
            </li>
          </ul>
        </div>

        
        <div className="header__search">
          <input type="text" placeholder="Search" />
          <button className="header__result">
            <i className="ri-search-line" />
          </button>
        </div>
        <div className="header__btns">
          <a className="btn btn-grad btn-sm" onClick={() =>navigate("/connect-wallet")} >
            <i className="ri-wallet-3-line" />
            Connect wallet
          </a>
          <a href="" id="connectbtn" onClick={() =>navigate("/connect-wallet")}>
            <img width={45} src={MetaMask} alt="" />
          </a>
        </div>
        
      </div>
    </div>
  </header>
      </div>
    </div>
  </nav>

  );
};
