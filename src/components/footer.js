import React from 'react';
import Logo from "./../utils/img/logos/Logo.svg";
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  return (
	<footer className="footer__1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 space-y-20">
          <div className="footer__logo">
            <a  onClick={() =>navigate("/")}>
              <img src={Logo} alt="logo" id="logo_js_f" />
            </a>
          </div>
          <p className="footer__text">
            raroin is a shared liquidity NFT market smart contract
          </p>
          <div>
            <ul className="footer__social space-x-10 mb-40">
              <li>
                {" "}
                <a >
                  {" "}
                  <i className="ri-facebook-line" />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a >
                  {" "}
                  <i className="ri-messenger-line" />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a >
                  {" "}
                  <i className="ri-whatsapp-line" />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a >
                  {" "}
                  <i className="ri-youtube-line" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <h6 className="footer__title">Raroin</h6>
          <ul className="footer__list">
            <li>
              {" "}
              <a onClick={() =>navigate("/")}> Home </a>
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/forum")}> Forum</a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/privacy")}> PrivacyPolicy </a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/market")}> Marketplace</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6">
          <h6 className="footer__title">Assets</h6>
          <ul className="footer__list">
            <li>
              {" "}
              <a onClick={() =>navigate("/edit-profile")}> Profile </a>
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/creators")}> Creators </a>
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/collections")}> Colletctions </a>
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/activity")}> Activity</a>{" "}
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6">
          <h6 className="footer__title">Company</h6>
          <ul className="footer__list">
            <li>
              {" "}
              <a onClick={() =>navigate("/upcoming-projects")}> Upcoming Projects </a>
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/upload")}> Upload </a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/connect-wallet")}> Upload Types</a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={() =>navigate("/upload-type")}> Item details </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright text-center">
        Copyright © 2021. Created with love by creabik.
      </p>
    </div>
  </footer>
  );
};
