import React from 'react';
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";

import { Header } from './header';






export const RegisterPage = () => {
  return (
    <>
      <div className="overflow-hidden">
      <Header/>
      <div className="edit_profile register">
  <div className="container">
    <div className="row">
      <div className="col-lg-3" />
      <div className="col-lg-9">
        <div className="right_part space-y-20">
          <h1 className="color_white"> Register new account</h1>
          <p className="color_white" style={{ color: "white !important" }}>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
          <div className="box edit_box w-full space-y-20">
            <div className="row">
              <div className="col-lg-6 account-info">
                <div className="avatars space-x-20 mb-30">
                  <div id="profile-container">
                    <img
                      id="profileImage"
                      src={AvatarImage2}
                      alt="Avatar"
                      className="avatar avatar-lg border-0"
                    />
                  </div>
                  <div>
                    <h6 className="mb-1">Profile photo</h6>
                    <p className="mb-1">
                      We recommend an image of at least 400x400. Gifs work too
                      🙌
                    </p>
                    <div id="boxUpload">
                      <a href="#" className="btn btn-sm btn-dark">
                        {" "}
                        Upload{" "}
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
                  </div>
                </div>
                <h3 className="mb-20"> 🍉 Account info </h3>
                <div className="form-group space-y-10 mb-0">
                  <div className="space-y-20">
                    <div className="space-y-10">
                      <span className="nameInput">Display name</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="your name"
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Custom URL</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="raroin.creabik.com/"
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput d-flex justify-content-between">
                        Email
                        <span className="txt_xs color_text">
                          Your email for marketplace notifications
                        </span>
                      </span>
                      <div className="confirm">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email"
                        />
                        <a href="#" className="confirm-btn btn btn-dark btn-sm">
                          Confirm
                        </a>
                      </div>
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Bio</span>
                      <textarea
                        style={{ minHeight: 110 }}
                        placeholder="Add your bio"
                        defaultValue={"\t\t\t\t\t\t\t\t\t\t\t\t\t\t"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 social-media">
                <h3 className="mb-20">👨 Social media ‍</h3>
                <div className="form-group space-y-10">
                  <div className="space-y-20">
                    <div className="d-flex flex-column">
                      <span className="nameInput mb-10">Facebook</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="facebook username"
                      />
                      <a
                        className="facebook-btn btn btn-primary mt-10 btn-sm"
                        href="#"
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
                        className="twitter-btn btn btn-primary mt-10 btn-sm"
                        href="#"
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
                        className="discord-btn btn btn-primary mt-10 btn-sm"
                        href="#"
                      >
                        <i className="ri-discord-fill" />
                        Connect to Discord
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="mb-20 mt-40">📮 Notifications </h3>
                <ul className="space-y-10">
                  <li className="d-flex space-x-10 switch_item">
                    <input type="checkbox" id="switch1" defaultChecked="" />
                    <label htmlFor="switch1">Toggle</label>
                    <span className="color_text"> Email Notifications </span>
                  </li>
                  <li className="d-flex space-x-10 switch_item">
                    <input type="checkbox" id="switch2" defaultChecked="" />
                    <label htmlFor="switch2">Toggle</label>
                    <span className="color_text"> New Bids </span>
                  </li>
                  <li className="d-flex space-x-10 switch_item">
                    <input type="checkbox" id="switch3" defaultChecked="" />
                    <label htmlFor="switch3">Toggle</label>
                    <span className="color_text"> Item Purchased </span>
                  </li>
                  <li className="d-flex space-x-10 switch_item">
                    <input type="checkbox" id="switch4" defaultChecked="" />
                    <label htmlFor="switch4">Toggle</label>
                    <span className="color_text"> People Followed </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hr" />
            <p className="color_black">
              Please take a few minutes to read and understand Stacks Terms of
              Service. To continue, you’ll need to accept the terms of services
              by checking the boxes.
            </p>
            <a href="#" className="btn btn-grad">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




      </div>
</>
  );
};
