import React from "react";
import BadgeImage from "./../utils/img/icons/Badge.svg";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import AvatarImage3 from "./../utils/img/avatars/avatar_3.png";
import Item2Image from "./../utils/img/items/item_2.png";
import { Header } from "./header";
import { Footer } from "./footer";
import IpfImage from "./../utils/img/icons/ipfs.svg";

export const ItemDetail = () => {
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
            id="popup_buy"
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
                  <h3>Checkout</h3>
                  <p>
                    You are about to purchase a{" "}
                    <span className="color_black">SHADOW #7</span> from
                    <span className="color_black">Lona</span>
                  </p>
                  <div className="space-y-10">
                    <p>You pay</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="00.00 ETH"
                    />
                  </div>
                  <div className="space-y-10">
                    <p>
                      Enter quantity.{" "}
                      <span className="color_green">5 available</span>
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={1}
                    />
                  </div>
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
                    href="https://pay.sendwyre.com/"
                    className="btn btn-primary
			                    w-full"
                    aria-label="Close"
                  >
                    Add funds
                  </a>
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
            id="popup_report"
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
                  <h3>Report this item</h3>
                  <div className="hr" />
                  <div className="form-group space-y-10">
                    <span className="variationInput">reason:</span>
                    <select
                      className="form-select custom-select"
                      aria-label="Default select example"
                    >
                      <option> Select a reason</option>
                      <option>Purchase</option>
                      <option>Support</option>
                      <option>Technique</option>
                      <option>Service Request</option>
                    </select>
                  </div>
                  <div className="form-group space-y-10">
                    <span className="variationInput">Additional comments:</span>
                    <textarea
                      name="..."
                      cols={30}
                      rows={10}
                      placeholder="Explain why you are concerned about it."
                      defaultValue={""}
                    />
                  </div>
                  <a  className="btn btn-dark">
                    {" "}
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <a  className="btn btn-white btn-sm my-40">
              Back to home
            </a>
            <div className="item_details">
              <div className="row sm:space-y-20">
                <div className="col-lg-6">
                  <img className="item_img" src={Item2Image} alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="space-y-20">
                    <h3>Creative girl illustration</h3>
                    <div className="d-flex justify-content-between">
                      <div className="space-x-10 d-flex align-items-center">
                        <p>1 of 1</p>
                        <a  className="likes space-x-3">
                          <i className="ri-heart-3-fill" />
                          <span className="txt_sm">2.1k</span>
                        </a>
                      </div>
                      <div className="space-x-10 d-flex align-items-center">
                        <div className="share">
                          <div className="icon">
                            <a >
                              {" "}
                              <i className="ri-share-line" />
                            </a>
                          </div>
                          <div className="dropdown__popup">
                            <ul className="space-y-10">
                              <li>
                                {" "}
                                <a >
                                  {" "}
                                  <i className="ri-facebook-line" />
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a >
                                  {" "}
                                  <i className="ri-messenger-line" />
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a >
                                  {" "}
                                  <i className="ri-whatsapp-line" />
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a >
                                  {" "}
                                  <i className="ri-youtube-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="more">
                          <div className="icon">
                            <a >
                              {" "}
                              <i className="ri-more-fill" />
                            </a>
                          </div>
                          <div className="dropdown__popup">
                            <ul className="space-y-10">
                              <li>
                                <a
                                  
                                  className="space-x-10
															d-flex"
                                  data-toggle="modal"
                                  data-target="#popup_report"
                                >
                                  <i className="ri-flag-line" />
                                  <span> Report</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-white btn-sm
										dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        View proof of authenticity
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="https://ipfs.io/"
                          target="_blank"
                        >
                          <span>
                            <img src={IpfImage} width={20} alt="" />
                            View on IPFS
                          </span>
                          <i className="ri-external-link-line color_brand" />
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://etherscan.io/"
                          target="_blank"
                        >
                          <span>
                            <img
                              src="assets/img/icons/ether.png"
                              width={20}
                              alt=""
                            />
                            View on Etherscan
                          </span>
                          <i className="ri-external-link-line color_brand" />
                        </a>
                      </div>
                    </div>
                    <div className="box">
                      <div className="space-y-20">
                        <div
                          className="d-flex justify-content-between
											mb-30_reset"
                        >
                          <ul
                            className="nav nav-tabs d-flex space-x-10 mb-30"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="btn btn-white btn-sm active"
                                data-toggle="tab"
                                href="#tabs-1"
                                role="tab"
                              >
                                Details
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="btn btn-white btn-sm"
                                data-toggle="tab"
                                href="#tabs-2"
                                role="tab"
                              >
                                Bids
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="btn btn-white btn-sm"
                                data-toggle="tab"
                                href="#tabs-3"
                                role="tab"
                              >
                                History
                              </a>
                            </li>
                          </ul>
                          {/* Tab panes */}
                          <div className="dropdown d-none d-sm-block">
                            <button
                              className="btn btn-white btn-sm
													dropdown-toggle"
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
                        <div className="hr" />
                        <div className="tab-content">
                          <div
                            className="tab-pane active"
                            id="tabs-1"
                            role="tabpanel"
                          >
                            <p>
                              Hey guys! New exploration about NFT Marketplace
                              Web Design, this time I'm inspired by one of my
                              favorite NFT website called Rarible (with crypto
                              payment)! What do you think?
                            </p>
                          </div>
                          <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <p>
                              No active bids yet. Be the first to make a bid!
                            </p>
                          </div>
                          <div
                            className="tab-pane space-y-20"
                            id="tabs-3"
                            role="tabpanel"
                          >
                            <div
                              className="creator_item creator_card
													space-x-10"
                            >
                              <div className="avatars space-x-10">
                                <div className="media">
                                  <div className="badge">
                                    <img src={BadgeImage} alt="" />
                                  </div>
                                  <a >
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
																	avatar-md"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <p className="color_black">
                                    Bid accepted{" "}
                                    <span className="color_brand">1 ETH</span>{" "}
                                    by{" "}
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
                            <div
                              className="creator_item creator_card
													space-x-10"
                            >
                              <div className="avatars space-x-10">
                                <div className="media">
                                  <div className="badge">
                                    <img src={BadgeImage} alt="" />
                                  </div>
                                  <a>
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
																	avatar-md"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <p className="color_black">
                                    Bid accepted{" "}
                                    <span className="color_brand">3 ETH</span>{" "}
                                    by{" "}
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
                    <div className="numbers">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="space-y-5">
                            <p className="color_text">Minimum bid</p>
                            <h4>
                              2.4000{" "}
                              <span className="txt_sm color_text">
                                ETH/ $4769.88
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="space-y-5">
                            <p className="color_text">countdown</p>
                            <div
                              className="d-flex countdown_item
													align-items-center"
                            >
                              <div className="item">
                                <div className="number hours">
                                  22
                                  <span />
                                </div>
                              </div>
                              <div className="dots">:</div>
                              <div className="item">
                                <div className="number minutes">
                                  04
                                  <span />
                                </div>
                              </div>
                              <div className="dots">:</div>
                              <div className="item">
                                <div className="number seconds">
                                  35
                                  <span />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hr2" />
                    <div className="creators">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="avatars space-x-5">
                            <div className="media">
                              <a>
                                <img
                                  src={AvatarImage3}
                                  alt="Avatar"
                                  className="avatar
															avatar-sm"
                                />
                              </a>
                            </div>
                            <div>
                              <a>
                                <p className="avatars_name color_black">
                                  @ayoub_fennouni / fouzi...
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="avatars space-x-5">
                            <div className="media">
                              <div className="badge">
                                <img
                                  className="badge"
                                  src={BadgeImage}
                                  alt=""
                                />
                              </div>
                              <a>
                                <img
                                  src={AvatarImage2}
                                  alt="Avatar"
                                  className="avatar
															avatar-sm"
                                />
                              </a>
                            </div>
                            <div>
                              <a>
                                <p className="avatars_name color_black">
                                  @makinzi_jamy...
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex space-x-20">
                      <a
                        
                        className="btn btn-primary btn-lg"
                        data-toggle="modal"
                        data-target="#popup_buy"
                      >
                        {" "}
                        Buy Now
                      </a>
                      <a
                        
                        className="btn btn-grad btn-lg"
                        data-toggle="modal"
                        data-target="#popup_bid"
                      >
                        {" "}
                        Place bid
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
