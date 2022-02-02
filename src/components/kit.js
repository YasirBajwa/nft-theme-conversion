import React from "react";
import Logo from "./../utils/img/logos/Logo.svg";
import BadgeImage from "./../utils/img/icons/Badge.svg";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import AvatarImage3 from "./../utils/img/avatars/avatar_3.png";
import AvatarImage4 from "./../utils/img/avatars/avatar_4.png";
import NotificationImage from "./../utils/img/notifications/1.png";
import Item1Image from "./../utils/img/items/item_1.png";
import Item4Image from "./../utils/img/items/item_4.png";
import { Header } from "./header";
import { Footer } from "./footer";
import Coin from "./../utils/img/logos/coin.svg";
import EthImage from "./../utils/img/icons/ETH.svg";

export const KitPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <>
          <div className="hero__kit">
            <div className="container">
              <h1> Ui kit design system</h1>
            </div>
          </div>
          <div className="mb-100">
            {/* 1- Colors */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0 39 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816 43.904L16.016 27.552L0.448 33.376L0
									32.592L12.768 21.952L0 11.424L0.448 10.64L16.016
									16.352L18.816 0H19.712L22.512 16.352L38.08 10.64L38.528
									11.424L25.76 21.952L38.528 32.592L38.08 33.376L22.512
									27.552L19.712 43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  Colors
                </h3>
              </div>
              <div className="color dashed_box bg_white">
                <div className="row mb-20_reset">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Brand" />
                      <h6 className="color_black">Brand</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Gradient" />
                      <h6 className="color_black">Gradient</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Black" />
                      <h6 className="color_black">Black</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette White" />
                      <h6 className="color_black">White</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Light" />
                      <h6 className="color_black">Light</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Hard_light" />
                      <h6 className="color_black">Hard light</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Brand_light" />
                      <h6 className="color_black">Brand light</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Red" />
                      <h6 className="color_black">Red</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Green" />
                      <h6 className="color_black">Green</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Info" />
                      <h6 className="color_black">Info</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Stroke" />
                      <h6 className="color_black">Stroke</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="color_box space-y-10">
                      <div className="color_palette Text" />
                      <h6 className="color_black">Text</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3- Buttons */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0 39 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816 43.904L16.016 27.552L0.448 33.376L0
										32.592L12.768 21.952L0 11.424L0.448 10.64L16.016
										16.352L18.816 0H19.712L22.512 16.352L38.08
										10.64L38.528
										11.424L25.76 21.952L38.528 32.592L38.08
										33.376L22.512
										27.552L19.712 43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  Buttons
                </h3>
              </div>
              <div className="buttons dashed_box bg_white">
                <div className="row justify-content-center justify-content-md-around">
                  <div
                    className="col-lg-auto col-sm-6 d-flex flex-column
							      align-items-center"
                  >
                    <span className="txt_sm color_text text-center mb-20">
                      Small
                    </span>
                    <div className="mb-20">
                      <a className="btn btn-primary btn-sm" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-dark btn-sm" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-grad btn-sm" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-white btn-sm" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-orange btn-sm" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-green btn-sm" >
                        Button
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-auto col-sm-6 d-flex flex-column
							      align-items-center"
                  >
                    <span className="txt_sm text-center color_text mb-20">
                      Default
                    </span>
                    <div className="mb-20">
                      <a className="btn btn-primary" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-dark" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-grad" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-white" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-orange" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-green" >
                        Button
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-auto col-sm-6 d-flex flex-column
							      align-items-center"
                  >
                    <span className="txt_sm color_text text-center mb-20">
                      Large
                    </span>
                    <div className="mb-20">
                      <a className="btn btn-primary btn-lg" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-dark btn-lg" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-grad btn-lg" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-white btn-lg" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-orange btn-lg" >
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-green btn-lg" >
                        Button
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-auto col-sm-6 d-flex flex-column
							      align-items-center"
                  >
                    <span className="txt_sm color_text text-center mb-20">
                      small Has icon
                    </span>
                    <div className="mb-20">
                      <a className="btn btn-primary btn-sm" >
                        <i
                          className="ri-donut-chart-fill
							            sm"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-dark btn-sm" >
                        <i
                          className="ri-donut-chart-fill
							            sm"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-grad btn-sm" >
                        <i
                          className="ri-donut-chart-fill
							            sm"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-white btn-sm" >
                        <i
                          className="ri-donut-chart-fill
							            sm"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-orange btn-sm" >
                        <i
                          className="ri-donut-chart-fill
							            sm"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-green btn-sm" >
                        <i
                          className="ri-donut-chart-fill
							            sm"
                        />{" "}
                        Button
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-auto col-sm-6 d-flex flex-column
							      align-items-center"
                  >
                    <span className="txt_sm color_text text-center mb-20">
                      Default Has icon
                    </span>
                    <div className="mb-20">
                      <a className="btn btn-primary" >
                        <i
                          className="ri-donut-chart-fill
							            md"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-dark" >
                        <i
                          className="ri-donut-chart-fill
							            md"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-grad" >
                        <i
                          className="ri-donut-chart-fill
							            md"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-white" >
                        <i
                          className="ri-donut-chart-fill
							            md"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-orange" >
                        <i
                          className="ri-donut-chart-fill
							            md"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-green" >
                        <i
                          className="ri-donut-chart-fill
							            md"
                        />{" "}
                        Button
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-auto col-sm-6 d-flex flex-column
							      align-items-center"
                  >
                    <span className="txt_sm color_text text-center mb-20">
                      Large Has icon
                    </span>
                    <div className="mb-20">
                      <a className="btn btn-primary btn-lg" >
                        <i
                          className="ri-donut-chart-fill
							            lg"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-dark btn-lg" >
                        <i
                          className="ri-donut-chart-fill
							            lg"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-grad btn-lg" >
                        <i
                          className="ri-donut-chart-fill
							            lg"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-white btn-lg" >
                        <i
                          className="ri-donut-chart-fill
							            lg"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-orange btn-lg" >
                        <i
                          className="ri-donut-chart-fill
							            lg"
                        />{" "}
                        Button
                      </a>
                    </div>
                    <div className="mb-20">
                      <a className="btn btn-green btn-lg" >
                        <i
                          className="ri-donut-chart-fill
							            lg"
                        />{" "}
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4- Forms */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0 39 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816 43.904L16.016 27.552L0.448 33.376L0
											32.592L12.768 21.952L0 11.424L0.448 10.64L16.016
											16.352L18.816 0H19.712L22.512 16.352L38.08
											10.64L38.528
											11.424L25.76 21.952L38.528 32.592L38.08
											33.376L22.512
											27.552L19.712 43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  Forms
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-9">
                  <div className="form_cc_four mb-20">
                    <form action="text" className="row justify-content-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group space-y-10">
                          <span className="nameInput">Label name</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="input hover text here"
                          />
                        </div>
                        <div className="form-group space-y-10">
                          <span className="nameInput">Label name</span>
                          <input
                            type="text"
                            className="form-control input_white"
                            placeholder="input hover text here"
                          />
                        </div>
                        <div className="form-group space-y-10">
                          <span className="nameInput">Label name</span>
                          <div className="search">
                            <input type="text" placeholder="Search" />
                            <button className="result">
                              <i className="ri-search-line" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group space-y-10">
                          <span className="variationInput">has variation</span>
                          <select
                            className="form-select custom-select"
                            aria-label="Default select example"
                          >
                            <option>Please Select</option>
                            <option>Purchase</option>
                            <option>Support</option>
                            <option>Technique</option>
                            <option>Service Request</option>
                          </select>
                        </div>
                        <div className="form-group space-y-10">
                          <span className="variationInput">has variation</span>
                          <select
                            className="form-select custom-select input_white"
                            aria-label="Default select example"
                          >
                            <option>Please Select</option>
                            <option>Purchase</option>
                            <option>Support</option>
                            <option>Technique</option>
                            <option>Service Request</option>
                          </select>
                        </div>
                        <div className="form-group space-y-10">
                          <span className="variationInput">has variation</span>
                          <select
                            className="form-select custom-select"
                            aria-label="Default select example"
                          >
                            <option>Please Select</option>
                            <option>Purchase</option>
                            <option>Support</option>
                            <option>Technique</option>
                            <option>Service Request</option>
                          </select>
                        </div>
                      </div>
                      <div className="dashed_border_h mt-20 mb-40" />
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="input hover text here"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control input_white"
                            placeholder="input hover text here"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="search">
                            <input type="text" placeholder="Search" />
                            <button className="result">
                              <i className="ri-search-line" />
                            </button>
                          </div>
                        </div>
                        <div className="form-group">
                          <select
                            className="form-select custom-select"
                            aria-label="Default select example"
                          >
                            <option>Please Select</option>
                            <option>Purchase</option>
                            <option>Support</option>
                            <option>Technique</option>
                            <option>Service Request</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row space-y-20">
                    <div className="col">
                      <div className="form_cc_four">
                        <ul className="space-y-10 mn_with">
                          <li className="d-flex space-x-10 switch_item">
                            <input type="checkbox" id="switch1" />
                            <label htmlFor="switch1">Toggle</label>
                          </li>
                          <li className="d-flex space-x-10 switch_item">
                            <input type="checkbox" id="switch2" />
                            <label htmlFor="switch2">Toggle</label>
                            <span> has label </span>
                          </li>
                          <li className="d-flex space-x-10 switch_item">
                            <input
                              type="checkbox"
                              id="switch3"
                              defaultChecked=""
                            />
                            <label htmlFor="switch3">Toggle</label>
                          </li>
                          <li className="d-flex space-x-10 switch_item">
                            <input
                              type="checkbox"
                              id="switch4"
                              defaultChecked=""
                            />
                            <label htmlFor="switch4">Toggle</label>
                            <span> has label </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form_cc_four">
                        <ul className="space-y-10 mn_with">
                          <li className="d-flex space-x-10">
                            <div className="dropdown">
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
                          </li>
                          <li className="d-flex space-x-10">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary btn-sm
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
                          </li>
                          <li className="d-flex space-x-10">
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
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex space-x-10">
                        <div className="share">
                          <div className="share_box visible position-relative">
                            <ul className="space-y-10">
                              <li>
                                <a >
                                  {" "}
                                  <i className="ri-facebook-line" />
                                </a>
                              </li>
                              <li>
                                <a >
                                  {" "}
                                  <i className="ri-messenger-line" />
                                </a>
                              </li>
                              <li>
                                <a >
                                  {" "}
                                  <i className="ri-whatsapp-line" />
                                </a>
                              </li>
                              <li>
                                <a >
                                  {" "}
                                  <i className="ri-youtube-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="more">
                          <div className="more_box visible position-relative">
                            <ul className="space-y-10">
                              <li>
                                <a  className="space-x-10 d-flex">
                                  <i className="ri-flag-line" />
                                  <span> Report </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2- Typoghraphy */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0 39 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816 43.904L16.016 27.552L0.448
												33.376L0
												32.592L12.768 21.952L0 11.424L0.448
												10.64L16.016
												16.352L18.816 0H19.712L22.512 16.352L38.08
												10.64L38.528
												11.424L25.76 21.952L38.528 32.592L38.08
												33.376L22.512
												27.552L19.712 43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  Typoghraphy
                </h3>
              </div>
              <div className="typoghraphy dashed_box bg_white">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="space-y-20">
                      <p className="txt_sm color_black">
                        Body text small for small <br />
                        paragraphs.
                      </p>
                      <p className="txt_sm _bold color_black">
                        Body text small &amp; bold for small <br />
                        paragraphs.
                      </p>
                      <p className="txt_xs color_black">
                        Body text xsmall for xsmall <br />
                        paragraphs.
                      </p>
                      <p className="txt_xs _bold color_black">
                        Body text xsmall &amp; bold for xsmall <br />
                        paragraphs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="space-y-20">
                      <p className="txt color_black">
                        Body text normal for normal <br />
                        paragraphs.
                      </p>
                      <p className="txt _bold color_black">
                        Body text normal &amp; bold for normal <br />
                        paragraphs.
                      </p>
                      <p className="txt_lg color_black">
                        Body text large for big <br />
                        paragraphs.
                      </p>
                      <p className="txt_lg _bold color_black">
                        Body text large &amp; bold for big <br />
                        paragraphs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="space-y-20">
                      <div className="d-flex align-items-center space-x-10">
                        <h1>Headline 1</h1>
                      </div>
                      <div className="d-flex align-items-center space-x-10">
                        <h2>Headline 2</h2>
                      </div>
                      <div className="d-flex align-items-center space-x-10">
                        <h3>Headline 3</h3>
                      </div>
                      <div className="d-flex align-items-center space-x-10">
                        <h4>Headline 4</h4>
                      </div>
                      <div className="d-flex align-items-center space-x-10">
                        <h5>Headline 5</h5>
                      </div>
                      <div className="d-flex align-items-center space-x-10">
                        <h6>Headline 6</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 5- Card items */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0 39 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816 43.904L16.016 27.552L0.448
													33.376L0
													32.592L12.768 21.952L0 11.424L0.448
													10.64L16.016
													16.352L18.816 0H19.712L22.512
													16.352L38.08
													10.64L38.528
													11.424L25.76 21.952L38.528 32.592L38.08
													33.376L22.512
													27.552L19.712 43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  card items
                </h3>
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
              <div className="dashed_box">
                <div className="row mb-100 mb-30_reset">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card__item one">
                      <div className="card_body space-y-10">
                        {/* =============== */}
                        <div className="card_head">
                          <img src="assets/img/items/item_4.png" alt="" />
                          <div className="details d-flex justify-content-between">
                            <div className="bid space-x-10">
                              <div className="icon">
                                <img src={EthImage} alt="..." />
                              </div>
                              <div>
                                <p className="color_text txt_xs">CURRENT BID</p>
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
                        {/* =============== */}
                        <h6 className="card_title">
                          Colorful Abstract Painting
                        </h6>
                        <div className="hr" />
                        <div
                          className="card_footer justify-content-between flex-column
																flex-md-row"
                        >
                          <div className="creators space-x-10">
                            <div className="avatars space-x-3">
                              <div className="-space-x-20">
                                <a >
                                  <img
                                    src={AvatarImage2}
                                    alt="Avatar"
                                    className="avatar avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage2}
                                    alt="Avatar"
                                    className="avatar avatar-sm"
                                  />
                                </a>
                              </div>
                              <a >
                                <p className="avatars_name txt_sm">
                                  @makinzi_jamy...
                                </p>
                              </a>
                            </div>
                          </div>
                          <a  className="likes space-x-3">
                            <i className="ri-heart-3-fill" />
                            <span className="txt_sm">2.1k</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card__item three">
                      <div className="card_body space-y-10">
                        {/* =============== */}
                        <div className="card_head">
                          <img src={Item4Image} alt="" />
                          <a  className="likes space-x-3">
                            <i className="ri-heart-3-fill" />
                            <span className="txt_sm">2.1k</span>
                          </a>
                          <div className="action">
                            <a
                              
                              className="btn btn-primary btn-sm
																		btn_auction"
                              data-toggle="modal"
                              data-target="#popup_bid"
                            >
                              <i className="ri-auction-line color_white" />
                              Place Your Bid
                            </a>
                          </div>
                        </div>
                        {/* =============== */}
                        <h6 className="card_title">
                          Colorful Abstract Painting
                        </h6>
                        <div className="card_footer d-block space-y-10">
                          <div className="d-flex justify-content-between">
                            <div className="creators space-x-10">
                              <div className="avatars space-x-3">
                                <div className="-space-x-20">
                                  <a >
                                    <img
                                      src={AvatarImage2}
                                      alt="Avatar"
                                      className="avatar
																						avatar-sm"
                                    />
                                  </a>
                                  <a >
                                    <img
                                      src={AvatarImage2}
                                      alt="Avatar"
                                      className="avatar
																						avatar-sm"
                                    />
                                  </a>
                                </div>
                                <a >
                                  <p className="avatars_name txt_sm">
                                    @makinzi_jamy...
                                  </p>
                                </a>
                              </div>
                            </div>
                            <a  className="space-x-3">
                              <p className="color_green txt_sm">0.001 ETH</p>
                            </a>
                          </div>
                          <div className="hr" />
                          <a
                            
                            className="d-flex align-items-center
																	space-x-10"
                          >
                            <i className="ri-vip-crown-line" />
                            <p
                              className="color_text txt_sm"
                              style={{ width: "auto" }}
                            >
                              Highest bid
                            </p>
                            <span className="color_black txt_sm">
                              0.001 ETH
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card__item two">
                      <div className="card_body space-y-10">
                        {/* =============== */}
                        <div className="card_head">
                          <img src="assets/img/items/item_4.png" alt="" />
                          <div className="block_timer">
                            <div
                              className="d-flex justify-content-center
																		align-items-center"
                            >
                              <div className="item">
                                <div className="number txt hours">
                                  09
                                  <span />
                                </div>
                              </div>
                              <div className="dots">:</div>
                              <div className="item">
                                <div className="number txt minutes">
                                  23
                                  <span />
                                </div>
                              </div>
                              <div className="dots">:</div>
                              <div className="item">
                                <div className="number txt seconds">
                                  17
                                  <span />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="details d-flex justify-content-between">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                        {/* =============== */}
                        <h6 className="card_title">
                          Colorful Abstract Painting
                        </h6>
                        <div className="hr" />
                        <div
                          className="card_footer justify-content-between flex-column
																flex-md-row"
                        >
                          <div className="creators space-x-10">
                            <div className="avatars space-x-3">
                              <div className="-space-x-20">
                                <a >
                                  <img
                                    src={AvatarImage2}
                                    alt="Avatar"
                                    className="avatar avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage2}
                                    alt="Avatar"
                                    className="avatar avatar-sm"
                                  />
                                </a>
                              </div>
                              <a >
                                <p className="avatars_name txt_sm">
                                  @makinzi_jamy...
                                </p>
                              </a>
                            </div>
                          </div>
                          <a  className="space-x-3">
                            <p className="color_green txt_sm">0.001 ETH</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
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
                              <p className="avatars_name txt_sm">
                                @mickel_fenn
                              </p>
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
                              <p className="avatars_name txt_sm">
                                @mickel_fenn
                              </p>
                            </a>
                          </div>
                        </div>
                        <div className="card_head">
                          <img src="assets/img/items/item_4.png" alt="" />
                          <a  className="likes space-x-3">
                            <i className="ri-heart-3-fill" />
                            <span className="txt_sm">2.1k</span>
                          </a>
                        </div>
                        {/* =============== */}
                        <h6 className="card_title">
                          Colorful Abstract Painting
                        </h6>
                        <div className="card_footer d-block space-y-10">
                          <div className="card_footer justify-content-between">
                            <div className="creators">
                              <p className="txt_sm">3 in stock</p>
                            </div>
                            <a  className="">
                              <p className="txt_sm">
                                Price:{" "}
                                <span className="color_green txt_sm">
                                  345 ETH
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
                            <div className="d-flex align-items-center space-x-10">
                              <i className="ri-history-line" />
                              <a
                                
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
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card__item four">
                      <div className="card_body space-y-10">
                        {/* =============== */}
                        <div className="creators space-x-10">
                          <div className="avatars space-x-3">
                            <a >
                              <img
                                src={AvatarImage2}
                                alt="Avatar"
                                className="avatar avatar-md"
                              />
                            </a>
                            <div>
                              <p className="avatars_desc color_black">
                                <span className="txt _bold">@samj</span>
                                accepted an offer for about{" "}
                                <span className="color_brand">$4,906</span>
                                on Bound To Fall In Love from{" "}
                                <span className="bayer">@colborn</span>
                              </p>
                              <span className="time color_text">
                                23 min ago
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card_head">
                          <img src={Item4Image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                    <div className="card__item five">
                      <div className="card_body space-y-10 space-x-10 d-flex">
                        {/*  =============== */}
                        <div className="card_head">
                          <img src={Item4Image} alt="" />
                          <div className="details d-flex justify-content-between">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                        {/* =============== */}
                        <div
                          className="d-flex flex-column justify-content-center w-100
																space-y-10"
                        >
                          <h6 className="card_title">
                            Colorful Abstract Painting
                          </h6>
                          <div className="hr" />
                          <div className="card_footer d-block space-y-10">
                            <div className="creators space-x-10">
                              <div className="avatars space-x-3">
                                <a >
                                  <img
                                    src={AvatarImage4}
                                    alt="Avatar"
                                    className="avatar avatar-sm"
                                  />
                                </a>
                                <a >
                                  <p className="avatars_name txt_sm">
                                    @makinzi_jamy...
                                  </p>
                                </a>
                              </div>
                            </div>
                            <div
                              className="d-flex
																		align-items-center
																		justify-content-between
																		space-x-3"
                            >
                              <a
                                className="btn btn-sm btn-primary"
                                
                                data-toggle="modal"
                                data-target="#popup_bid"
                              >
                                Place Bid
                              </a>
                              <span className="color_green txt_sm text-right">
                                0.01 ETH
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="card__item has_style2 six">
                      <div className="card_body">
                        {/* =============== */}
                        <div className="card_head">
                          <img src={Item4Image} alt="" />
                        </div>
                        <div className="card_footer">
                          <div className="details space-y-10">
                            <h4 className="card_title">
                              Colorful Pockemon Red Dragon
                            </h4>
                            <div className="card_wrap space-x-20">
                              <div className="bid">
                                <p className="color_text txt_xs">MINIMUM BID</p>
                                <span className="txt_sm _bold">4.77 ETH</span>
                              </div>
                              <div className="auction_end">
                                <p className="color_text txt_xs">COUNTDOWN</p>
                                <span className="counter txt_sm _bold">
                                  56 : 34 : 00
                                </span>
                              </div>
                              <div className="bid_btn">
                                <a
                                  
                                  className="btn btn-grad btn-sm"
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
                  </div>
                </div>
              </div>{" "}
            </div>
            {/* 6- Creators items */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0 39
													44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816 43.904L16.016
														27.552L0.448
														33.376L0
														32.592L12.768 21.952L0 11.424L0.448
														10.64L16.016
														16.352L18.816 0H19.712L22.512
														16.352L38.08 10.64L38.528
														11.424L25.76 21.952L38.528
														32.592L38.08
														33.376L22.512
														27.552L19.712 43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  creators items
                </h3>
              </div>
              <div className="dashed_box">
                <div className="row">
                  <div className="col-lg-4 space-y-30">
                    {/* creator_item */}
                    <div className="creator_item creator_card rounded_border space-x-10">
                      <div className="avatars space-x-10">
                        <a >
                          <img
                            src={AvatarImage3}
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </a>
                        <div>
                          <a >
                            <p className="avatars_name color_black">
                              @makinzi_jamy...
                            </p>
                          </a>
                          <span className="price color_text">16.58 ETH</span>
                        </div>
                      </div>
                    </div>
                    {/* creator_item */}
                    <div className="creator_item creator_card rounded_border space-x-10">
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
                          <a >
                            <p className="avatars_name color_black">
                              @makinzi_jamy...
                            </p>
                          </a>
                          <span className="price color_text">16.58 ETH</span>
                        </div>
                      </div>
                    </div>
                    {/* creator_item */}
                    <div className="creator_item creator_card space-x-10">
                      <div className="avatars space-x-10">
                        <a >
                          <img
                            src={AvatarImage2}
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </a>
                        <div>
                          <a >
                            <p className="avatars_name color_black">
                              @makinzi_jamy...
                            </p>
                          </a>
                          <span className="price color_text">16.58 ETH</span>
                        </div>
                      </div>
                    </div>
                    {/* creator_item */}
                    <div className="creator_item creator_card space-x-10">
                      <div className="avatars space-x-10">
                        <div className="media">
                          <div className="badge">
                            <img src={AvatarImage2} alt="" />
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
                          <a >
                            <p className="avatars_name color_black">
                              @makinzi_jamy...
                            </p>
                          </a>
                          <span className="price color_text">16.58 ETH</span>
                        </div>
                      </div>
                    </div>
                    {/* creator_item */}
                    <div className="creator_item space-x-10">
                      <div className="avatars space-x-10">
                        <div className="media">
                          <a >
                            <img
                              src={AvatarImage2}
                              alt="Avatar"
                              className="avatar avatar-md"
                            />
                          </a>
                          <div className="has_number">1</div>
                        </div>
                        <div>
                          <a >
                            <p className="avatars_name color_black">
                              @makinzi_jamy...
                            </p>
                          </a>
                          <span className="price color_text">16.58 ETH</span>
                        </div>
                      </div>
                    </div>
                    {/* creator_item */}
                    <div className="creator_item space-x-10">
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
                          <div className="has_number">1</div>
                        </div>
                        <div>
                          <a >
                            <p className="avatars_name color_black">
                              @makinzi_jamy...
                            </p>
                          </a>
                          <span className="price color_text">16.58 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {/* creator_item */}
                    <div className="creator_item creator_card space-y-10 is_big">
                      <div className="avatars flex-column space-y-10">
                        <div className="media has_border">
                          <a >
                            <img
                              src={AvatarImage2}
                              alt="Avatar"
                              className="avatar avatar-md"
                            />
                          </a>
                          <div className="has_number top">1</div>
                        </div>
                        <div className="text-center">
                          <a >
                            <p className="avatars_name large color_black">
                              @ayoub_fennouni
                            </p>
                          </a>
                          <span className="sales color_text">
                            27 sales on 12 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {/* creator_item */}
                    <div className="creator_item creator_card space-y-10">
                      <div className="avatars flex-column space-y-10">
                        <div className="cover" />
                        <div className="media">
                          <a >
                            <img
                              src={AvatarImage2}
                              alt="Avatar"
                              className="avatar avatar-md"
                            />
                          </a>
                        </div>
                        <div className="details text-center">
                          <div>
                            <p className="color_black txt_lg">
                              191 <span className="color_text txt_sm">ETH</span>
                            </p>
                            <p className="color_black txt_sm">Sold</p>
                          </div>
                          <div>
                            <p className="color_black txt_lg">345</p>
                            <p className="color_black txt_sm">Collections</p>
                          </div>
                          <div>
                            <p className="color_black txt_lg">17,005</p>
                            <p className="color_black txt_sm">Views</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 7- Collections items */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0
														39
														44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816 43.904L16.016
															27.552L0.448 33.376L0
															32.592L12.768 21.952L0
															11.424L0.448
															10.64L16.016
															16.352L18.816 0H19.712L22.512
															16.352L38.08 10.64L38.528
															11.424L25.76 21.952L38.528
															32.592L38.08 33.376L22.512
															27.552L19.712 43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  Collections items
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-10">
                  <div className="collections space-y-10 dashed_box">
                    <div className="collections_item">
                      <div className="images-box space-y-10">
                        <div className="top_imgs">
                          <img src={Item1Image} alt="" />
                          <img src={Item1Image} alt="" />
                          <img src={Item1Image} alt="" />
                        </div>
                        <div>
                          <img src={Item1Image} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="collections_footer justify-content-between">
                      <h5>Creative Smart Art collection</h5>
                      <a  className="likes space-x-3">
                        <i className="ri-heart-3-fill" />
                        <span className="txt_md">2.1k</span>
                      </a>
                    </div>
                    <div className="creators space-x-10">
                      <span className="color_text txt_md">
                        {" "}
                        31 items · Created by
                      </span>
                      <div className="avatars">
                        <a >
                          <img
                            src={AvatarImage}
                            alt="Avatar"
                            className="avatar avatar-sm"
                          />
                        </a>
                      </div>
                      <a >
                        <span className="avatars_name txt_sm">
                          {" "}
                          @makinzi_jamy...{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 9- Headers */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0 39 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816
																43.904L16.016
																27.552L0.448 33.376L0
																32.592L12.768 21.952L0
																11.424L0.448
																10.64L16.016
																16.352L18.816
																0H19.712L22.512
																16.352L38.08
																10.64L38.528
																11.424L25.76
																21.952L38.528
																32.592L38.08
																33.376L22.512
																27.552L19.712
																43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                  Headers
                </h3>
              </div>
              <div className="headers space-y-20 dashed_box">
                <header className="header__1 js-header">
                  <div className="container">
                    <div className="wrapper js-header-wrapper">
                      <div className="header__logo">
                        <a >
                          <img className="header__logo" src={Logo} alt="logo" />
                        </a>
                      </div>
                      <div className="header__menu">
                        <ul className="d-flex space-x-20">
                          <li className="has_popup">
                            <a className="color_brand" >
                              Explore
                            </a>
                          </li>
                          <li>
                            <a className="color_black" >
                              {" "}
                              How it works
                            </a>
                          </li>
                          <li>
                            <a className="color_black" >
                              {" "}
                              Company
                            </a>
                          </li>
                          <li>
                            <a className="color_black" >
                              {" "}
                              Pages
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
                        <a className="btn btn-grad btn-sm" >
                          Connect wallet
                        </a>
                      </div>
                      <div className="header__burger js-header-burger" />
                      <div className="header__mobile js-header-mobile">
                        <div className="header__mobile__menu space-y-40">
                          <ul className="d-flex space-y-20">
                            <li>
                              {" "}
                              <a
                                className="color_black"
                              >
                                {" "}
                                Marketplace
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a
                                className="color_black"
                              >
                                {" "}
                                Collections
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className="color_black" >
                                {" "}
                                Profile
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className="color_black" >
                                {" "}
                                Creators
                              </a>{" "}
                            </li>
                          </ul>
                          <div className="space-y-20">
                            <div className="header__search in_mobile w-full">
                              <input type="text" placeholder="Search" />
                              <button className="header__result">
                                <i className="ri-search-line" />
                              </button>
                            </div>
                            <a
                              className="btn btn-grad btn-sm"
                            >
                              Connect wallet
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <header className="header__1 js-header">
                  <div className="container">
                    <div className="wrapper js-header-wrapper space-x-20">
                      <div className="header__logo">
                        <a >
                          <img className="header__logo" src={Logo} alt="logo" />
                        </a>
                      </div>
                      <div className="header__menu">
                        <ul className="d-flex space-x-20">
                          <li className="has_popup">
                            <a className="color_brand" >
                              Explore
                            </a>
                          </li>
                          <li>
                            <a className="color_black" >
                              {" "}
                              How it works
                            </a>
                          </li>
                          <li>
                            <a className="color_black" >
                              {" "}
                              Company
                            </a>
                          </li>
                          <li>
                            <a className="color_black" >
                              {" "}
                              Pages
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
                      <div className="space-x-20 d-flex align-items-center">
                        <div className="header__notifications">
                          <div className="js-notifications-icon">
                            <i className="ri-notification-3-line" />
                          </div>
                          <div className="notifications_popup space-y-20">
                            <div className="d-flex justify-content-between">
                              <h5>Notifications</h5>
                              <a  className="badge color_white">
                                View all
                              </a>
                            </div>
                            <div
                              className="item
																					space-x-20
																					d-flex
																					justify-content-between
																					align-items-center"
                            >
                              <img
                                className="thumb"
                                src={NotificationImage}
                                alt="..."
                              />
                              <div className="details">
                                <a >
                                  {" "}
                                  <h6>Money revieved</h6>{" "}
                                </a>
                                <p>0.6 ETH</p>
                              </div>
                              <span className="circle" />
                            </div>
                          </div>
                        </div>
                        <div className="header__avatar">
                          <div className="price">
                            <span>
                              2.45 <strong>ETH</strong>{" "}
                            </span>
                          </div>
                          <img
                            className="avatar"
                            src={AvatarImage}
                            alt="avatar"
                          />
                          <div className="avatar_popup space-y-20">
                            <div
                              className="d-flex align-items-center
																					justify-content-between"
                            >
                              <span> 13b9ebda035r178... </span>
                              <a  className="ml-2">
                                <i className="ri-file-copy-line" />
                              </a>
                            </div>
                            <div className="d-flex align-items-center space-x-10">
                              <img className="coin" src={Coin} alt="/" />
                              <div className="info">
                                <p className="text-sm font-book text-gray-400">
                                  Balance
                                </p>
                                <p
                                  className="w-full text-sm font-bold
																							text-green-500"
                                >
                                  16.58 ETH
                                </p>
                              </div>
                            </div>
                            <div className="hr" />
                            <div className="links space-y-10">
                              <a >
                                <i className="ri-landscape-line" />{" "}
                                <span> My items</span>
                              </a>
                              <a >
                                <i className="ri-pencil-line" />{" "}
                                <span> Edit Profile</span>
                              </a>
                              <a >
                                <i className="ri-logout-circle-line" />{" "}
                                <span>Logout</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="header__btns">
                          <a className="btn btn-primary btn-sm" >
                            Create
                          </a>
                        </div>
                        <div className="header__burger js-header-burger" />
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
            {/* 8- Footers */}
            <div className="container">
              <div className="mt-100">
                <h3 className="mb-40">
                  <svg
                    width={39}
                    height={44}
                    viewBox="0 0
																39 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.816
																	43.904L16.016
																	27.552L0.448 33.376L0
																	32.592L12.768 21.952L0
																	11.424L0.448
																	10.64L16.016
																	16.352L18.816
																	0H19.712L22.512
																	16.352L38.08
																	10.64L38.528
																	11.424L25.76
																	21.952L38.528
																	32.592L38.08
																	33.376L22.512
																	27.552L19.712
																	43.904H18.816Z"
                      fill="#183B56"
                    />
                  </svg>
                </h3>
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};
