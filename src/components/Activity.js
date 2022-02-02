import React from "react";
import Item1Image from "./../utils/img/items/item_1.png";
import Item2Image from "./../utils/img/items/item_2.png";
import Item3Image from "./../utils/img/items/item_3.png";
import Item4Image from "./../utils/img/items/item_4.png";
import { Header } from "./header";
import { Footer } from "./footer";

export const Activity = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
          <div className="hero__activity">
            <div className="container">
              <h1 className="text-center">Activity Feed</h1>
            </div>
          </div>
          <div className="bg_white border-b py-20">
            <div className="container">
              <div className="d-flex justify-content-center">
                <ul className="menu_activity space-x-20">
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
          <div className="section__activity">
            <div className="container mt-100">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <div
                    className="d-flex justify-content-between align-items-center
								mb-20"
                  >
                    <a href="#">Mark all read</a>
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
                  <div className="space-y-20">
                    <div className="box">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="creators_box">
                            <div className="avatars space-x-10">
                              <div className="media">
                                <img
                                  src={Item1Image}
                                  alt="Avatar"
                                  className="avatar
															avatar-md"
                                />
                              </div>
                              <div>
                                <h5 className="color_black">
                                  Creative Art collection
                                </h5>
                                <div className="d-flex space-x-10">
                                  <span className="price color_text">
                                    listed by
                                  </span>
                                  <a
                                    href="Profile.html"
                                    className="price color_brand"
                                  >
                                    @jimena_stark
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <p className="date color_text"> Last 2 days </p>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="creators_box">
                            <div className="avatars space-x-10">
                              <div className="media">
                                <img
                                  src={Item2Image}
                                  alt="Avatar"
                                  className="avatar
															avatar-md"
                                />
                              </div>
                              <div>
                                <h5 className="color_black">
                                  Creative Art collection
                                </h5>
                                <div className="d-flex space-x-10">
                                  <span className="price color_text">
                                    listed by
                                  </span>
                                  <a
                                   
                                    className="price color_brand"
                                  >
                                    @makinzi_beck
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <p className="date color_text"> Last 2 days </p>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="creators_box">
                            <div className="avatars space-x-10">
                              <div className="media">
                                <img
                                  src={Item3Image}
                                  alt="Avatar"
                                  className="avatar
															avatar-md"
                                />
                              </div>
                              <div>
                                <h5 className="color_black">
                                  Creative Art collection
                                </h5>
                                <div className="d-flex space-x-10">
                                  <span className="price color_text">
                                    listed by
                                  </span>
                                  <a
                                    href="Profile.html"
                                    className="price color_brand"
                                  >
                                    @jaxon_duffy
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <p className="date color_text"> Last 2 days </p>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="creators_box">
                            <div className="avatars space-x-10">
                              <div className="media">
                                <img
                                  src={Item4Image}
                                  alt="Avatar"
                                  className="avatar
															avatar-md"
                                />
                              </div>
                              <div>
                                <h5 className="color_black">
                                  Creative Art collection
                                </h5>
                                <div className="d-flex space-x-10">
                                  <span className="price color_text">
                                    listed by
                                  </span>
                                  <a
                                   
                                    className="price color_brand"
                                  >
                                    @darian_barry
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <p className="date color_text"> Last 2 days </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};
