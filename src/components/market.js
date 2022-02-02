import React from "react";

import BadgeImage from "./../utils/img/icons/Badge.svg";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import Item1Image from "./../utils/img/items/item_1.png";
import Item9Image from "./../utils/img/items/item_9.png";
import Item10Image from "./../utils/img/items/item_10.png";
import Item11Image from "./../utils/img/items/item_11.png";
import Item12Image from "./../utils/img/items/item_12.png";
import { Header } from "./header";
import { Footer } from "./footer";

export const MarketPlace = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <>
          <div className="hero_marketplace bg_white">
            <div className="container">
              <h1 className="text-center">NFT Marketplace</h1>
            </div>
          </div>
          <div className="bg_white border-b py-20">
            <div className="container">
              <div className="d-flex justify-content-center">
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
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Artworks</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex space-x-10 align-items-center">
                      <span
                        className="color_text txt_sm"
                        style={{ minWidth: "max-content" }}
                      >
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch1" />
                          <label htmlFor="switch1">Toggle</label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input
                            type="checkbox"
                            id="switch2"
                            defaultChecked=""
                          />
                          <label htmlFor="switch2">Toggle</label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch3" />
                          <label htmlFor="switch3">Toggle</label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch4" />
                          <label htmlFor="switch4">Toggle</label>
                          <span> Has sold </span>
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="d-flex space-x-10 align-items-center sm:mt-20">
                      <span className="color_text txt_sm"> SORT BY: </span>
                      <div className="dropdown">
                        <button
                          className="btn btn-dark btn-sm dropdown-toggle"
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
                </div>
              </div>
              <div
                className="modal fade popup"
                id="popup_bid_success"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
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
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
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
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
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
                                src={AvatarImage2}
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
              <div className="row mb-30_reset">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="card__item four">
                    <div className="card_body space-y-10">
                      {/* =============== */}
                      <div className="creators space-x-10">
                        <div className="avatars space-x-3">
                          <a >
                            <img
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
                              src={AvatarImage2}
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
                          <img src={Item1Image} alt="" />
                        </a>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">1.2k</span>
                        </a>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">Colorful Abstract Painting</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 4 in stock</p>
                          </div>
                          <a  className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
			        									txt_sm"
                              >
                                2.45 ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr" />
                        <div
                          className="d-flex align-items-center space-x-10
			        						justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
			        							space-x-10"
                          >
                            <i className="ri-history-line" />
                            <a
                              className="view_history"
                              
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
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
              </div>{" "}
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center space-x-10">
                      <span
                        className="color_text txt_sm"
                        style={{ minWidth: "max-content" }}
                      >
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch7" />
                          <label htmlFor="switch7">Toggle</label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input
                            type="checkbox"
                            id="switch8"
                            defaultChecked=""
                          />
                          <label htmlFor="switch8">Toggle</label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch9" />
                          <label htmlFor="switch9">Toggle</label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch10" />
                          <label htmlFor="switch10">Toggle</label>
                          <span> Has sold </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="d-flex space-x-10 align-items-center sm:mt-20">
                      <span className="color_text txt_sm"> SORT BY: </span>
                      <div className="dropdown">
                        <button
                          className="btn btn-dark btn-sm dropdown-toggle"
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
                            <img src={Item11Image} alt="" />
                          </div>
                          <img src={Item12Image} alt="" />
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
                        <p className="avatars_name txt_sm">
                          {" "}
                          @william_jamy...{" "}
                        </p>
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
                        <p className="avatars_name txt_sm">
                          {" "}
                          @william_jamy...{" "}
                        </p>
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
                        <p className="avatars_name txt_sm">
                          {" "}
                          @william_jamy...{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};
