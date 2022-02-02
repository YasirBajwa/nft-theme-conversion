import React from "react";
import BadgeImage from "./../utils/img/icons/Badge.svg";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import Item1Image from "./../utils/img/items/item_1.png";
import Item2Image from "./../utils/img/items/item_2.png";
import Item4Image from "./../utils/img/items/item_4.png";
import { Header } from "./header";
import { Footer } from "./footer";
import BidgradeImage from "./../utils/img/icons/bid-grad.png";

export const LiveAuction = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <>
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
                  <h3 className="text-center">
                    Your Bidding Successfuly Added
                  </h3>
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
                    Enter quantity.{" "}
                    <span className="color_green">5 available</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={1}
                  />
                  <div className="hr" />
                  <div className="d-flex justify-content-between">
                    <p> You must bid at least:</p>
                    <p className="text-right color_black txt _bold">
                      {" "}
                      67,000 ETH{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p> service free:</p>
                    <p className="text-right color_black txt _bold">
                      {" "}
                      0,901 ETH{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p> Total bid amount:</p>
                    <p className="text-right color_black txt _bold">
                      {" "}
                      56,031 ETH{" "}
                    </p>
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
          <div className="hero_Live_Auctions">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-sm-12 space-y-10 left_content">
                  <img
                    className="img-fluid"
                    src={BidgradeImage}
                    alt="bid icon"
                    style={{ maxWidth: 70 }}
                  />
                  <h1 className="text-left">Live Auctions</h1>
                  <p>
                    Sign up to receive our monthly newsletter, featuring updates
                    from the team, new decentralized applications and NFT
                    projects, and trends we’re seeing in the space.
                  </p>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="card__item one">
                    <div className="card_body space-y-10">
                      <div className="row align-items-center">
                        <div
                          className="col-xl-7 col-md-7 col-sm-7 space-y-20
			                                card_left"
                        >
                          <div className="space-y-20">
                            <h4>Colorful Abstract Painting</h4>
                            <div
                              className="details d-flex
			                                        justify-content-between"
                            >
                              <div className="bid">
                                <div>
                                  <p className="color_text txt_xs">
                                    CURRENT BID
                                  </p>
                                  <span className="txt_sm">4.77 ETH</span>
                                </div>
                              </div>
                              <div className="auction_end">
                                <p className="color_text txt_xs">AUCTION END</p>
                                <span className="counter txt_sm">
                                  56 : 34 : 00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="d-flex justify-content-center
			                                    space-x-20"
                          >
                            <div>
                              <a
                                
                                className="btn btn-white"
                              >
                                View Artwork
                              </a>
                            </div>
                            <div>
                              <a
                                
                                data-toggle="modal"
                                data-target="#popup_bid"
                                className="btn
			                                            btn-grad"
                              >
                                Place Bid
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-5 col-sm-5">
                          <div className="card_right">
                            <a >
                              <img src={Item4Image} alt=".." />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <h3 className="text-center">
                    Your Bidding Successfuly Added
                  </h3>
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
                    Enter quantity.{" "}
                    <span className="color_green">5 available</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={1}
                  />
                  <div className="hr" />
                  <div className="d-flex justify-content-between">
                    <p> You must bid at least:</p>
                    <p className="text-right color_black txt _bold">
                      {" "}
                      67,000 ETH{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p> service free:</p>
                    <p className="text-right color_black txt _bold">
                      {" "}
                      0,901 ETH{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p> Total bid amount:</p>
                    <p className="text-right color_black txt _bold">
                      {" "}
                      56,031 ETH{" "}
                    </p>
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
                          <img src="assets/img/icons/Badge.svg" alt="" />
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
                        <p className="color_black">
                          Bid accepted{" "}
                          <span className="color_brand">1 ETH</span> by{" "}
                          <a
                            className="color_black txt
												_bold"
                            
                          >
                            ayoub
                          </a>
                        </p>
                        <span className="date color_text">
                          28/06/2021, 12:08
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="creator_item creator_card space-x-10">
                    <div className="avatars space-x-10">
                      <div className="media">
                        <div className="badge">
                          <img src={BadgeImage} alt="" />
                        </div>
                        <a >
                          <img
                            src={AvatarImage2}
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </a>
                      </div>
                      <div>
                        <p className="color_black">
                          Bid accepted{" "}
                          <span className="color_brand">3 ETH</span> by{" "}
                          <a
                            className="color_black txt
												_bold"
                            
                          >
                            monir
                          </a>
                        </p>
                        <span className="date color_text">
                          22/05/2021, 12:08
                        </span>
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
                        <i className="ri-stock-line" />{" "}
                        <span> Trading Cards </span>
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
                        <i className="ri-global-line" />{" "}
                        <span> Domain Names </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a >
                        <i className="ri-emotion-laugh-line" />{" "}
                        <span> Memes </span>
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
                            <p className="avatars_name txt_xs">
                              @danil_pannini
                            </p>
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
                              <span className="color_green txt_sm">
                                2.45 ETH
                              </span>
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
                            <p className="avatars_name txt_xs">
                              @mucky_fennouni
                            </p>
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
                              <span className="color_green txt_sm">
                                2.55 ETH
                              </span>
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
                            <p className="avatars_name txt_xs">
                              @kristian_sefroui
                            </p>
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
                              <span className="color_green txt_sm">
                                2.45 ETH
                              </span>
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
                            <p className="avatars_name txt_xs">
                              @mucky_holiman
                            </p>
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
                              <span className="color_green txt_sm">
                                0.55 ETH
                              </span>
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
                            <p className="avatars_name txt_xs">
                              @danil_pannini
                            </p>
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
                              <span className="color_green txt_sm">
                                2.45 ETH
                              </span>
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
                            <p className="avatars_name txt_xs">
                              @mucky_fennouni
                            </p>
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
                              <span className="color_green txt_sm">
                                2.55 ETH
                              </span>
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
                            <p className="avatars_name txt_xs">
                              @kristian_sefroui
                            </p>
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
                              <span className="color_green txt_sm">
                                2.45 ETH
                              </span>
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
                            <p className="avatars_name txt_xs">
                              @mucky_holiman
                            </p>
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
                              <span className="color_green txt_sm">
                                0.55 ETH
                              </span>
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
                <a  className="btn btn-sm btn-white">
                  <i className="ri-restart-line" />
                  View all items
                </a>
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};
