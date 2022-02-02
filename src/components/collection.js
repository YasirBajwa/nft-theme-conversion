import React from "react";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import Item1Image from "./../utils/img/items/item_1.png";
import Item2Image from "./../utils/img/items/item_2.png";
import Item3Image from "./../utils/img/items/item_3.png";
import Item4Image from "./../utils/img/items/item_4.png";
import Item5Image from "./../utils/img/items/item_5.png";
import Item6Image from "./../utils/img/items/item_6.png";
import Item7Image from "./../utils/img/items/item_7.png";
import Item8Image from "./../utils/img/items/item_8.png";
import { Header } from "./header";
import { Footer } from "./footer";

export const Collection = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="hero__collections">
          <div className="container">
            <h1>Artwork collections</h1>
          </div>
        </div>
        <div className="filters bg_white border-b py-20">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-auto">
                <div className="d-flex space-x-10 align-items-center">
                  <span className="color_text txt_sm"> FILTER BY: </span>
                  <ul className="menu_categories space-x-20">
                    <li className="d-flex space-x-10 switch_item">
                      <input type="checkbox" id="switch1" />
                      <label htmlFor="switch1">Toggle</label>
                      <span> Has list price </span>
                    </li>
                    <li className="d-flex space-x-10 switch_item">
                      <input type="checkbox" id="switch2" defaultChecked="" />
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
        </div>
        <div className="section mt-100">
          <div className="container">
            <div className="row justify-content-center mb-30_reset">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="collections space-y-10 mb-30">
                  <div className="collections_item">
                    <a >
                      <div className="images-box space-y-10">
                        <div className="d-flex space-x-10">
                          <img
                            style={{ width: "33.33%" }}
                            src={Item1Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item2Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item3Image}
                            alt=""
                          />
                        </div>
                        <div>
                          <img src={Item4Image} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
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
                  <div className="collections_item">
                    <a >
                      <div className="images-box space-y-10">
                        <div className="d-flex space-x-10">
                          <img
                            style={{ width: "33.33%" }}
                            src={Item5Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item6Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item7Image}
                            alt=""
                          />
                        </div>
                        <div>
                          <img src={Item8Image} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="collections_footer justify-content-between">
                    <h5 className="collection_title">
                      <a >
                        Colorful Abstract collection
                      </a>
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
                  <div className="collections_item">
                    <a >
                      <div className="images-box space-y-10">
                        <div className="d-flex space-x-10">
                          <img
                            style={{ width: "33.33%" }}
                            src={Item2Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item2Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item3Image}
                            alt=""
                          />
                        </div>
                        <div>
                          <img src={Item7Image} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="collections_footer justify-content-between">
                    <h5 className="collection_title">
                      <a >Photography Art collection</a>
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
                          src={AvatarImage2}
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
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="collections space-y-10 mb-30">
                  <div className="collections_item">
                    <a >
                      <div className="images-box space-y-10">
                        <div className="d-flex space-x-10">
                          <img
                            style={{ width: "33.33%" }}
                            src={Item1Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item2Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item3Image}
                            alt=""
                          />
                        </div>
                        <div>
                          <img src={Item4Image} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="collections_footer justify-content-between">
                    <h5 className="collection_title">
                      <a >Fantasy Art collection</a>
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
                  <div className="collections_item">
                    <a >
                      <div className="images-box space-y-10">
                        <div className="d-flex space-x-10">
                          <img
                            style={{ width: "33.33%" }}
                            src={Item1Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item2Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item3Image}
                            alt=""
                          />
                        </div>
                        <div>
                          <img src={Item4Image} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="collections_footer justify-content-between">
                    <h5 className="collection_title">
                      <a >Pop Art collection</a>
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
                  <div className="collections_item">
                    <a >
                      <div className="images-box space-y-10">
                        <div className="d-flex space-x-10">
                          <img
                            style={{ width: "33.33%" }}
                            src={Item2Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item3Image}
                            alt=""
                          />
                          <img
                            style={{ width: "33.33%" }}
                            src={Item4Image}
                            alt=""
                          />
                        </div>
                        <div>
                          <img src={Item5Image} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="collections_footer justify-content-between">
                    <h5 className="collection_title">
                      <a >Contemporary Art collection</a>
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
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
