import React from 'react';
import HeroImage from "./../utils/img/bg/in_hero1.png";
import BadgeImage from "./../utils/img/icons/Badge.svg";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import Item1Image from "./../utils/img/items/item_1.png";
import Item2Image from "./../utils/img/items/item_2.png";
import Item9Image from "./../utils/img/items/item_9.png";
import Item10Image from "./../utils/img/items/item_10.png";
import Item11Image from "./../utils/img/items/item_11.png";
import Item12Image from "./../utils/img/items/item_12.png";
import IllustrationImage from "./../utils/img/logos/Logo_illustrstion.png";
import logo1 from "./../utils/img/logos/1.svg";
import logo2 from "./../utils/img/logos/2.svg";
import logo3 from "./../utils/img/logos/3.svg";
import { Header } from './header';
import { Footer } from './footer';

import { useNavigate } from 'react-router-dom';





export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidden">
        <Header />

        <div className="hero__1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero__left space-y-20">
                  <h1 className="hero__title">
                    Discover digital art and collect NFTs
                  </h1>
                  <p className="hero__text txt">
                    raroin is a shared liquidity NFT market smart contract which
                    is used by multiple websites to provide the users the best
                    possible experience.
                  </p>
                  <div
                    className="space-x-20 d-flex flex-column flex-md-row
                                        sm:space-y-20"
                  >
                    <a className="btn btn-primary" >
                      View market
                    </a>
                    <a className="btn btn-white" >
                      Upload your item
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid w-full"
                  id="img_js"
                  src={HeroImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="section__artists mt-100">
      <div className="container">
        <div className="space-y-30">
          <div className="section_head">
            <h2 className="section__title">Top Artists</h2>
          </div>
          <div className="section_body swiper_artists">
            <div className="swiper-wrapper position-relative">
              <div className="swiper-slide">
                <div className="creator_item creator_card rounded_border space-x-10">
                  <div className="avatars space-x-10">
                    <div className="media">
                      <div className="badge">
                        <img src={BadgeImage} alt="" />
                      </div>
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-md"
                        />
                      </a>
                    </div>
                    <div>
                      <a >
                        <p className="avatars_name color_black">
                          @xander_hall...
                        </p>
                      </a>
                      <span className="price color_green">16.58 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="creator_item creator_card rounded_border space-x-10">
                  <div className="avatars space-x-10">
                    <div className="media">
                      <div className="badge">
                        <img src="assets/img/icons/Badge.svg" alt="" />
                      </div>
                      <a >
                        <img
                          src="assets/img/avatars/avatar_2.png"
                          alt="Avatar"
                          className="avatar avatar-md"
                        />
                      </a>
                    </div>
                    <div>
                      <a >
                        <p className="avatars_name color_black">
                          @hamza_pitts...
                        </p>
                      </a>
                      <span className="price color_green">14.55 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="creator_item creator_card rounded_border space-x-10">
                  <div className="avatars space-x-10">
                    <div className="media">
                      <div className="badge">
                        <img src="assets/img/icons/Badge.svg" alt="" />
                      </div>
                      <a >
                        <img
                          src="assets/img/avatars/avatar_3.png"
                          alt="Avatar"
                          className="avatar avatar-md"
                        />
                      </a>
                    </div>
                    <div>
                      <a >
                        <p className="avatars_name color_black">
                          @nathan_walls...
                        </p>
                      </a>
                      <span className="price color_green">24.13 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="creator_item creator_card rounded_border space-x-10">
                  <div className="avatars space-x-10">
                    <div className="media">
                      <div className="badge">
                        <img src="assets/img/icons/Badge.svg" alt="" />
                      </div>
                      <a >
                        <img
                          src="assets/img/avatars/avatar_4.png"
                          alt="Avatar"
                          className="avatar avatar-md"
                        />
                      </a>
                    </div>
                    <div>
                      <a >
                        <p className="avatars_name color_black">
                          @kelton_collier...
                        </p>
                      </a>
                      <span className="price color_green">62.68 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="creator_item creator_card rounded_border space-x-10">
                  <div className="avatars space-x-10">
                    <div className="media">
                      <div className="badge">
                        <img src="assets/img/icons/Badge.svg" alt="" />
                      </div>
                      <a >
                        <img
                          src="assets/img/avatars/avatar_5.png"
                          alt="Avatar"
                          className="avatar avatar-md"
                        />
                      </a>
                    </div>
                    <div>
                      <a >
                        <p className="avatars_name color_black">
                          @cade_glover...
                        </p>
                      </a>
                      <span className="price color_green">32.48 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </div>{" "}
    </div> */}
      </div>
      <div
        className="modal fade popup"
        id="popup_bid_success"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body space-y-20 p-40">
              <h3 className="text-center">Your Bidding Successfuly Added</h3>
              <p className="text-center">
                your bid{" "}
                <span
                  className="color_text txt
                                    _bold"
                >
                  (16ETH){" "}
                </span>{" "}
                has been listing to our database
              </p>
              <a  className="btn btn-dark w-full">
                {" "}
                Watch the listings
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade popup"
        id="popup_bid"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body space-y-20 p-40">
              <h3>Place a Bid</h3>
              <p>
                You must bid at least{" "}
                <span className="color_black">15 ETH</span>
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="00.00 ETH"
              />
              <p>
                Enter quantity. <span className="color_green">5 available</span>
              </p>
              <input type="text" className="form-control" defaultValue={1} />
              <div className="hr" />
              <div className="d-flex justify-content-between">
                <p> You must bid at least:</p>
                <p className="text-right color_black txt _bold"> 67,000 ETH </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> service free:</p>
                <p className="text-right color_black txt _bold"> 0,901 ETH </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> Total bid amount:</p>
                <p className="text-right color_black txt _bold"> 56,031 ETH </p>
              </div>
              <a
                
                className="btn btn-primary w-full"
                data-toggle="modal"
                data-target="#popup_bid_success"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                Place a bid
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade popup"
        id="popup_history"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body space-y-20 p-40">
              <h4> History </h4>
              <div className="creator_item creator_card space-x-10">
                <div className="avatars space-x-10">
                  <div className="media">
                    <div className="badge">
                      <img src={BadgeImage} alt="" />
                    </div>
                    <a >
                      <img
                        src="assets/img/avatars/avatar_1.png"
                        alt="Avatar"
                        className="avatar avatar-md"
                      />
                    </a>
                  </div>
                  <div>
                    <p className="color_black">
                      Bid accepted <span className="color_brand">1 ETH</span> by{" "}
                      <a
                        className="color_black txt
                                                _bold"
                        
                      >
                        ayoub
                      </a>
                    </p>
                    <span className="date color_text">28/06/2021, 12:08</span>
                  </div>
                </div>
              </div>
              <div className="creator_item creator_card space-x-10">
                <div className="avatars space-x-10">
                  <div className="media">
                    <div className="badge">
                      <img src="assets/img/icons/Badge.svg" alt="" />
                    </div>
                    <a >
                      <img
                        src="assets/img/avatars/avatar_2.png"
                        alt="Avatar"
                        className="avatar avatar-md"
                      />
                    </a>
                  </div>
                  <div>
                    <p className="color_black">
                      Bid accepted <span className="color_brand">3 ETH</span> by{" "}
                      <a
                        className="color_black txt
                                                _bold"
                        
                      >
                        monir
                      </a>
                    </p>
                    <span className="date color_text">22/05/2021, 12:08</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-100">
        <div className="container">
          <div className="section__head">
            <div
              className="d-md-flex
                            sm:space-y-20
                            space-x-20
                            justify-content-between
                            align-items-center"
            >
              <h2 className="section__title text-center">Explore</h2>
              <ul className="menu_categories space-x-20">
                <li>
                  <a  className="color_brand">
                    <span> All </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a >
                    <i className="ri-gamepad-line" /> <span> Games </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a >
                    <i className="ri-brush-line" /> <span> Art </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a >
                    <i className="ri-stock-line" /> <span> Trading Cards </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a >
                    <i className="ri-music-line" /> <span> Music </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a >
                    <i className="ri-global-line" /> <span> Domain Names </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a >
                    <i className="ri-emotion-laugh-line" /> <span> Memes </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a >
                    <i className="ri-layout-4-line" />{" "}
                    <span> Collectibles </span>
                  </a>
                </li>
              </ul>{" "}
              <div className="dropdown text-center">
                <button
                  className="btn btn-white btn-sm dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Recent Active
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" >
                    Action
                  </a>
                  <a className="dropdown-item" >
                    Another action
                  </a>
                  <a className="dropdown-item" >
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mickel_fenn</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage2}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@danil_pannini</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item1Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">1.2k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      Colorful Abstract Painting
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">4 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">2.45 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mazanov_sky</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage2}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mucky_fennouni</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item2Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">13.2k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      The girl with the firefly
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">12 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">2.55 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@jimmy_dom</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage2}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@kristian_sefroui</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item1Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">1.2k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      Dodo hide the seek
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">6 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">2.45 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@Alvin_nov</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mucky_holiman</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item1Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">4.1k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      Liquid Forest Princess
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">34 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">0.55 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mickel_fenn</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage2}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@danil_pannini</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item1Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">1.2k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      Colorful Abstract Painting
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">4 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">2.45 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mazanov_sky</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage2}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mucky_fennouni</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item2Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">13.2k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      The girl with the firefly
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">12 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">2.55 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@jimmy_dom</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage2}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@kristian_sefroui</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item1Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">1.2k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      Dodo hide the seek
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">6 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">2.45 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@Alvin_nov</p>
                      </a>
                    </div>
                    <div className="avatars space-x-3">
                      <a >
                        <img
                          src={AvatarImage}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </a>
                      <a >
                        <p className="avatars_name txt_xs">@mucky_holiman</p>
                      </a>
                    </div>
                  </div>
                  <div className="card_head">
                    <a >
                      <img
                        src={Item1Image}
                        alt="item
                                                img"
                      />
                    </a>
                    <a  className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">4.1k</span>
                    </a>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <a className="color_black" >
                      Liquid Forest Princess
                    </a>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">34 in stock</p>
                      </div>
                      <a  className="">
                        <p className="txt_sm">
                          Price:{" "}
                          <span className="color_green txt_sm">0.55 ETH</span>
                        </p>
                      </a>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
                                            align-items-center
                                            space-x-10
                                            justify-content-between"
                    >
                      <div
                        className="d-flex align-items-center
                                                space-x-5"
                      >
                        <i className="ri-history-line" />
                        <a
                          
                          data-toggle="modal"
                          data-target="#popup_history"
                        >
                          <p
                            className="color_text txt_sm
                                                        view_history"
                            style={{ width: "auto" }}
                          >
                            View History
                          </p>
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-primary"
                        
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a  className="btn btn-sm btn-white" onClick={() =>navigate("/market")}>
              <i className="ri-restart-line" />
              View all items
            </a>
          </div>
        </div>
      </div>
      <div className="section mt-100">
        <div className="container">
          <div className="section__head">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="section__title"> Collections</h2>
              <a  className="btn btn-dark btn-sm" onClick={() =>navigate("/collections")}>
                View All
              </a>
            </div>
          </div>
          <div className="row justify-content-center mb-30_reset">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <a >
                  <div className="collections_item">
                    <div className="images-box space-y-10">
                      <div className="top_imgs">
                        <img src={Item9Image} alt="" />
                        <img src={Item10Image} alt="" />
                        <img src={Item10Image} alt="" />
                      </div>
                      <img src={Item11Image} alt="" />
                    </div>
                  </div>
                </a>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <a >Creative Art collection</a>
                  </h5>
                  <a  className="likes space-x-3">
                    <i className="ri-heart-3-fill" />
                    <span className="txt_md">2.1k</span>
                  </a>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    5 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <a >
                      <img
                        src={AvatarImage}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </a>
                  </div>
                  <a >
                    <p className="avatars_name txt_sm"> @william_jamy... </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <a >
                  <div className="collections_item">
                    <div className="images-box space-y-10">
                      <div className="top_imgs">
                        <img src={Item9Image} alt="" />
                        <img src={Item10Image} alt="" />
                        <img src={Item11Image} alt="" />
                      </div>
                      <img src={Item12Image} alt="" />
                    </div>
                  </div>
                </a>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <a >Colorful Abstract Painting</a>
                  </h5>
                  <a  className="likes space-x-3">
                    <i className="ri-heart-3-fill" />
                    <span className="txt_md">3.5k</span>
                  </a>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    7 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <a >
                      <img
                        src={AvatarImage}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </a>
                  </div>
                  <a >
                    <p className="avatars_name txt_sm"> @alexis_fenn... </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <a >
                  <div className="collections_item">
                    <div className="images-box space-y-10">
                      <div className="top_imgs">
                        <img src={Item9Image} alt="" />
                        <img src={Item10Image} alt="" />
                        <img src={Item11Image} alt="" />
                      </div>
                      <img src={Item12Image} alt="" />
                    </div>
                  </div>
                </a>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <a >Modern Art collection</a>
                  </h5>
                  <a  className="likes space-x-3">
                    <i className="ri-heart-3-fill" />
                    <span className="txt_md">7.2k</span>
                  </a>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    2 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <a >
                      <img
                        src={AvatarImage}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </a>
                  </div>
                  <a >
                    <p className="avatars_name txt_sm"> @Joshua_Bren... </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="call2action">
        <div className="container">
          <div
            className="row justify-content-between align-items-center
                        sm:space-y-20"
          >
            <div className="col-md-6">
              <div className="space-y-20">
                <h1 className="text-white">Start your own collection today</h1>
                <p className="color_text section__text">
                  raroin is a shared liquidity NFT market smart contract which
                  is used by multiple websites to provide the users the best
                  possible experience.
                </p>
                <a
                  
                  className="btn
                                    btn-primary"
                >
                  Start Collecting
                </a>
              </div>
            </div>
            <div className="col-md-auto">
              <img
                className="img-fluid img__logo"
                src={IllustrationImage}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logos__wrap">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-auto col-md-12">
              <h3
                className="section__title md:mb-20 text-left d-flex
                                justify-content-center"
              >
                Loved by the community
              </h3>
            </div>
            <div className="col-lg-auto col-md-12">
              <div
                className="d-flex flex-column flex-md-row
                                justify-content-center
                                space-x-20 sm:space-x-0 sm:space-y-20 align-items-center"
              >
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
