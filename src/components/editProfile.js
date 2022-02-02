import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import ticktok from "./../utils/img/icons/tiktok.svg";
import MediumImage from "./../utils/img/icons/medium.svg";
import CoverImage from "./../utils/img/bg/cover.jpg";
import UploadImage from "./../utils/img/icons/upload-plus.svg";
import EditImage from "./../utils/img/bg/edit1.png";
import AvatarImage3 from "./../utils/img/avatars/avatar_3.png";

export const EditProfile = () => {
  return (
    <>
      <div className="overflow-hidden">
        <>
          <div
            className="modal fade popup"
            id="popup_social_media"
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
                  <h3 className="text-center">Add more Social media</h3>
                  <div className="d-flex flex-column">
                    <span className="nameInput mb-10">Telegram</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="telegram username"
                    />
                    <a
                      className="telegram-btn btn btn-primary mt-20
			                        btn-sm"
                      
                    >
                      <i className="ri-telegram-fill" />
                      Connect to Telegram
                    </a>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="nameInput mb-10">Instagram</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="instagram username"
                    />
                    <a
                      className="instagram-btn btn btn-primary mt-20
			                        btn-sm"
                      
                    >
                      <i className="ri-instagram-fill" />
                      Connect to Instagram
                    </a>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="nameInput mb-10">TikTok</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tiktok username"
                    />
                    <a
                      className="tiktok-btn btn btn-primary mt-20
			                        btn-sm"
                      
                    >
                      <img
                        className="mr-half"
                        src={ticktok}
                        alt=""
                        style={{ height: 20 }}
                      />
                      Connect to TikTok
                    </a>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="nameInput mb-10">Youtube</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="youtube username"
                    />
                    <a
                      className="youtube-btn btn btn-primary mt-20
			                        btn-sm"
                      
                    >
                      <i className="ri-youtube-fill" />
                      Connect to Youtube
                    </a>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="nameInput mb-10">Medium</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="medium username"
                    />
                    <a
                      className="medium-btn btn btn-primary mt-20
			                        btn-sm"
                      
                    >
                      <img src={MediumImage} alt="" style={{ width: 21 }} />
                      Connect to Medium
                    </a>
                  </div>
                  <a
                    className="discord-btn btn btn-primary
			                w-100"
                    
                  >
                    Save
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="edit_profile">
            {/* ====== header */}
            <Header />
            <div className="mb-50">
              <div className="hero__profile">
                <div className="tabs">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb default mb-0">
                      <li className="breadcrumb-item">
                        <a >Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Edit profile
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="cover">
                  <img src={CoverImage} alt="cover" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="mb-50">
                <h3 className="mb-30">Choice your Cover image</h3>
                <div className="row profile-img">
                  <div className="col-6 col-md-2">
                    <div
                      className="box
			                        in__profile
			                        d-flex
			                        justify-content-center
			                        align-items-center"
                    >
                      <img className="icon" src={UploadImage} alt="" />
                      <input type="file" accept="image/png, image/jpeg" />
                    </div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="pro_img is_active">
                      <img src={CoverImage} alt="" />
                    </div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="pro_img">
                      <img src={EditImage} alt="" />
                    </div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="pro_img">
                      <img src={EditImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="avatars space-x-20 mb-30">
                  <div id="profile-container">
                    <img
                      id="profileImage"
                      src={AvatarImage3}
                      alt="Avatar"
                      className="avatar avatar-lg border-0"
                    />
                  </div>
                  <div className="space-x-10 d-flex">
                    <div id="boxUpload">
                      <a  className="btn btn-dark">
                        Upload New Photo{" "}
                      </a>
                      <input
                        id="imageUpload"
                        type="file"
                        name="profile_photo"
                        placeholder="Photo"
                        required=""
                        capture=""
                      />
                    </div>
                    <a  className="btn btn-white">
                      {" "}
                      Delete{" "}
                    </a>
                  </div>
                </div>
                <div className="box edit_box col-lg-9 space-y-30">
                  <div className="row sm:space-y-20">
                    <div className="col-lg-6 account-info">
                      <h3 className="mb-20">Account info 🍉</h3>
                      <div className="form-group space-y-10 mb-0">
                        <div className="space-y-40">
                          <div className="space-y-10">
                            <span className="nameInput">Display name</span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Creabik"
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Custom URL</span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="raroin.creabik.com/"
                            />
                          </div>
                          <div className="space-y-10">
                            <span
                              className="nameInput d-flex
			                                        justify-content-between"
                            >
                              Email
                              <span className="txt_xs">
                                Your email for marketplace notifications
                              </span>
                            </span>
                            <div className="confirm">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email"
                              />
                              <a
                                
                                className="confirm-btn btn
			                                            btn-dark btn-sm"
                              >
                                Confirm
                              </a>
                            </div>
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Bio</span>
                            <textarea
                              style={{ minHeight: 110 }}
                              placeholder="Add your bio"
                              defaultValue={
                                "\t\t\t\n\t\t\t                                    "
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 social-media">
                      <h3 className="mb-20">Your Social media</h3>
                      <div className="form-group space-y-10">
                        <div className="space-y-40">
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Facebook</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="facebook username"
                            />
                            <a
                              className="facebook-btn btn btn-primary mt-20
			                                        btn-sm"
                              
                            >
                              <i className="ri-facebook-circle-fill" />
                              Connect to Facebook
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Twitter</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="twitter username"
                            />
                            <a
                              className="twitter-btn btn btn-primary mt-20
			                                        btn-sm"
                              
                            >
                              <i className="ri-twitter-fill" />
                              Connect to Twitter
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Discord</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="discord username"
                            />
                            <a
                              className="discord-btn btn btn-primary mt-20
			                                        btn-sm"
                              
                            >
                              <i className="ri-discord-fill" />
                              Connect to Discord
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        className="btn btn-white mt-20
			                            btn-sm"
                        
                        data-toggle="modal"
                        data-target="#popup_social_media"
                      >
                        <i className="ri-add-circle-line color_brand" />
                        Add more Social media
                      </a>
                    </div>
                  </div>
                  <div className="hr" />
                  <p className="color_black">
                    To update your settings you should sign message through your
                    wallet. Click 'Update profile' then sign the message.
                  </p>
                  <div>
                    <a  className="btn btn-grad">
                      Update Profile
                    </a>
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
