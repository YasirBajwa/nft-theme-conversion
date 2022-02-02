import React from "react";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import AvatarImage3 from "./../utils/img/avatars/avatar_3.png";
import AvatarImage4 from "./../utils/img/avatars/avatar_4.png";
import { Header } from "./header";
import { Footer } from "./footer";
import Post1Image from "./../utils/img/small_post/1.jpg";
import Post2Image from "./../utils/img/small_post/2.jpg";
import Post3Image from "./../utils/img/small_post/3.jpg";
import Post4Image from "./../utils/img/small_post/4.jpg";
import Post5Image from "./../utils/img/small_post/5.jpg";



export const Blog = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="hero_forum bg_white">
          <div className="container">
            <div className="row align-items-center sm:space-y-20">
              <div className="col-lg-6 col-md-6 col-sm-12 space-y-10">
                <h1 className="text-left">Latest News</h1>
                <p>
                  You can set preferred display name, create your profile URL
                  and manage other personal settings.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="search m-auto" style={{ maxWidth: 400 }}>
                  <input type="text" placeholder="Forum Blog" />
                  <button className="result">
                    <i className="ri-search-line" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="mt-100">
          <div className="container">
            <div className="main" id="main-content">
              {/* ================================= blog */}
              <div className="row">
                <div className="col-lg-8 pr-5 pr-sm-0 pl-sm-0">
                  <div id="content">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="blog has_style_grid">
                            <div className="row align-items-center">
                              <div className="col-row col-12">
                                <div className="blog-img">
                                  <div className="meta absolute">
                                    <a
                                      
                                      className="comments
			                                                            meta-info mobile"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M2
			                                                                    8.994A5.99
			                                                                    5.99 0 0 1 8
			                                                                    3h8c3.313 0
			                                                                    6 2.695 6
			                                                                    5.994V21H8c-3.313
			                                                                    0-6-2.695-6-5.994V8.994zM14
			                                                                    11v2h2v-2h-2zm-6
			                                                                    0v2h2v-2H8z"
                                        ></path>
                                      </svg>
                                      <span className="comment-count">1</span>
                                    </a>
                                    <span
                                      className="views-counter
			                                                            meta-info mobile
			                                                            comments"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M12
			                                                                    23a7.5 7.5 0
			                                                                    0
			                                                                    1-5.138-12.963C8.204
			                                                                    8.774 11.5
			                                                                    6.5 11 1.5c6
			                                                                    4 9 8 3 14 1
			                                                                    0 2.5 0
			                                                                    5-2.47.27.773.5
			                                                                    1.604.5
			                                                                    2.47A7.5 7.5
			                                                                    0 0 1 12
			                                                                    23z"
                                        ></path>
                                      </svg>
                                      5480
                                    </span>
                                    <div
                                      className="min-read
			                                                            meta-info"
                                      title="3
			                                                            Min Read"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M6.382
			                                                                    5.968A8.962
			                                                                    8.962 0 0 1
			                                                                    12 4c2.125 0
			                                                                    4.078.736
			                                                                    5.618
			                                                                    1.968l1.453-1.453
			                                                                    1.414
			                                                                    1.414-1.453
			                                                                    1.453a9 9 0
			                                                                    1 1-14.064
			                                                                    0L3.515
			                                                                    5.93l1.414-1.414
			                                                                    1.453
			                                                                    1.453zM13
			                                                                    12V7.495L8
			                                                                    14h3v4.5l5-6.5h-3zM8
			                                                                    1h8v2H8V1z"
                                        ></path>
                                      </svg>
                                      3
                                    </div>
                                  </div>
                                  <img src={Post1Image} alt="" />
                                </div>
                              </div>
                              <div className="col-row col-12">
                                <div className="blog-wrap">
                                  <h3 className="blog-title">
                                    <a >
                                      Design Trends From Top Designers
                                    </a>
                                  </h3>
                                  <p className="blog-excerpt">
                                    creabik is a digital design platform that
                                    combines a powerful, native Mac app with
                                    collaboration features in the cloud. The Mac
                                    app gives all the tools you need to
                                  </p>
                                  <div
                                    className="blog-author-detail
			                                                        d-flex
			                                                        justify-content-between
			                                                        align-items-center"
                                  >
                                    <div
                                      className="c-customer-review-meta
			                                                            d-flex
			                                                            justify-content-start
			                                                            align-items-center"
                                    >
                                      <div className="user">
                                        <img
                                          src={AvatarImage}
                                          alt="avatar"
                                          className="avatar
			                                                                    avatar-sm
			                                                                    rounded-circle"
                                        />
                                      </div>
                                      <div
                                        className="meta
			                                                                pl-20"
                                      >
                                        <p className="name">Joshua William</p>
                                        <p className="author-post">
                                          Verified writer
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      className="font-semibold
			                                                            text-gray"
                                    >
                                      08 May
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="blog has_style_grid">
                            <div className="row align-items-center">
                              <div className="col-row col-12">
                                <div className="blog-img">
                                  <div className="meta absolute">
                                    <a
                                      
                                      className="comments
			                                                            meta-info mobile"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M2
			                                                                    8.994A5.99
			                                                                    5.99 0 0 1 8
			                                                                    3h8c3.313 0
			                                                                    6 2.695 6
			                                                                    5.994V21H8c-3.313
			                                                                    0-6-2.695-6-5.994V8.994zM14
			                                                                    11v2h2v-2h-2zm-6
			                                                                    0v2h2v-2H8z"
                                        ></path>
                                      </svg>
                                      <span className="comment-count">1</span>
                                    </a>
                                    <span
                                      className="views-counter
			                                                            meta-info mobile
			                                                            comments"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M12
			                                                                    23a7.5 7.5 0
			                                                                    0
			                                                                    1-5.138-12.963C8.204
			                                                                    8.774 11.5
			                                                                    6.5 11 1.5c6
			                                                                    4 9 8 3 14 1
			                                                                    0 2.5 0
			                                                                    5-2.47.27.773.5
			                                                                    1.604.5
			                                                                    2.47A7.5 7.5
			                                                                    0 0 1 12
			                                                                    23z"
                                        ></path>
                                      </svg>
                                      5480
                                    </span>
                                    <div
                                      className="min-read
			                                                            meta-info"
                                      title="3
			                                                            Min Read"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M6.382
			                                                                    5.968A8.962
			                                                                    8.962 0 0 1
			                                                                    12 4c2.125 0
			                                                                    4.078.736
			                                                                    5.618
			                                                                    1.968l1.453-1.453
			                                                                    1.414
			                                                                    1.414-1.453
			                                                                    1.453a9 9 0
			                                                                    1 1-14.064
			                                                                    0L3.515
			                                                                    5.93l1.414-1.414
			                                                                    1.453
			                                                                    1.453zM13
			                                                                    12V7.495L8
			                                                                    14h3v4.5l5-6.5h-3zM8
			                                                                    1h8v2H8V1z"
                                        ></path>
                                      </svg>
                                      3
                                    </div>
                                  </div>
                                  <img src={Post2Image} alt="" />
                                </div>
                              </div>
                              <div className="col-row col-12">
                                <div className="blog-wrap">
                                  <h3 className="blog-title">
                                    <a >
                                      Behind the Scenes of the creabik App
                                    </a>
                                  </h3>
                                  <p className="blog-excerpt">
                                    There was this general idea that the
                                    existent tools were not tailored for UI/UX
                                    design, pair it with a strong codebase that
                                    creabik was,
                                  </p>
                                  <div
                                    className="blog-author-detail
			                                                        d-flex
			                                                        justify-content-between
			                                                        align-items-center"
                                  >
                                    <div
                                      className="c-customer-review-meta
			                                                            d-flex
			                                                            justify-content-start
			                                                            align-items-center"
                                    >
                                      <div className="user">
                                        <img
                                          src={AvatarImage2}
                                          alt="avatar"
                                          className="avatar
			                                                                    avatar-sm
			                                                                    rounded-circle"
                                        />
                                      </div>
                                      <div
                                        className="meta
			                                                                pl-20"
                                      >
                                        <p className="name">Joshua William</p>
                                        <p className="author-post">
                                          Verified writer
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      className="font-semibold
			                                                            text-gray"
                                    >
                                      08 May
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="blog has_style_grid">
                            <div className="row align-items-center">
                              <div className="col-row col-12">
                                <div className="blog-img">
                                  <div className="meta absolute">
                                    <a
                                      
                                      className="comments
			                                                            meta-info mobile"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M2
			                                                                    8.994A5.99
			                                                                    5.99 0 0 1 8
			                                                                    3h8c3.313 0
			                                                                    6 2.695 6
			                                                                    5.994V21H8c-3.313
			                                                                    0-6-2.695-6-5.994V8.994zM14
			                                                                    11v2h2v-2h-2zm-6
			                                                                    0v2h2v-2H8z"
                                        ></path>
                                      </svg>
                                      <span className="comment-count">1</span>
                                    </a>
                                    <span
                                      className="views-counter
			                                                            meta-info mobile
			                                                            comments"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M12
			                                                                    23a7.5 7.5 0
			                                                                    0
			                                                                    1-5.138-12.963C8.204
			                                                                    8.774 11.5
			                                                                    6.5 11 1.5c6
			                                                                    4 9 8 3 14 1
			                                                                    0 2.5 0
			                                                                    5-2.47.27.773.5
			                                                                    1.604.5
			                                                                    2.47A7.5 7.5
			                                                                    0 0 1 12
			                                                                    23z"
                                        ></path>
                                      </svg>
                                      5480
                                    </span>
                                    <div
                                      className="min-read
			                                                            meta-info"
                                      title="3
			                                                            Min Read"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M6.382
			                                                                    5.968A8.962
			                                                                    8.962 0 0 1
			                                                                    12 4c2.125 0
			                                                                    4.078.736
			                                                                    5.618
			                                                                    1.968l1.453-1.453
			                                                                    1.414
			                                                                    1.414-1.453
			                                                                    1.453a9 9 0
			                                                                    1 1-14.064
			                                                                    0L3.515
			                                                                    5.93l1.414-1.414
			                                                                    1.453
			                                                                    1.453zM13
			                                                                    12V7.495L8
			                                                                    14h3v4.5l5-6.5h-3zM8
			                                                                    1h8v2H8V1z"
                                        ></path>
                                      </svg>
                                      3
                                    </div>
                                  </div>
                                  <img src={Post3Image} alt="" />
                                </div>
                              </div>
                              <div className="col-row col-12">
                                <div className="blog-wrap">
                                  <h3 className="blog-title">
                                    <a >
                                      the official repository for designs
                                    </a>
                                  </h3>
                                  <p className="blog-excerpt">
                                    I think my role back then was doing
                                    everything! Haha, we were a two-man team for
                                    quite a while. I focused a lot of my time in
                                    design,{" "}
                                  </p>
                                  <div
                                    className="blog-author-detail
			                                                        d-flex
			                                                        justify-content-between
			                                                        align-items-center"
                                  >
                                    <div
                                      className="c-customer-review-meta
			                                                            d-flex
			                                                            justify-content-start
			                                                            align-items-center"
                                    >
                                      <div className="user">
                                        <img
                                          src={AvatarImage3}
                                          alt="avatar"
                                          className="avatar
			                                                                    avatar-sm
			                                                                    rounded-circle"
                                        />
                                      </div>
                                      <div
                                        className="meta
			                                                                pl-20"
                                      >
                                        <p className="name">Joshua William</p>
                                        <p className="author-post">
                                          Verified writer
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      className="font-semibold
			                                                            text-gray"
                                    >
                                      08 May
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="blog has_style_grid">
                            <div className="row align-items-center">
                              <div className="col-row col-12">
                                <div className="blog-img">
                                  <div className="meta absolute">
                                    <a
                                      
                                      className="comments
			                                                            meta-info mobile"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M2
			                                                                    8.994A5.99
			                                                                    5.99 0 0 1 8
			                                                                    3h8c3.313 0
			                                                                    6 2.695 6
			                                                                    5.994V21H8c-3.313
			                                                                    0-6-2.695-6-5.994V8.994zM14
			                                                                    11v2h2v-2h-2zm-6
			                                                                    0v2h2v-2H8z"
                                        ></path>
                                      </svg>
                                      <span className="comment-count">1</span>
                                    </a>
                                    <span
                                      className="views-counter
			                                                            meta-info mobile
			                                                            comments"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M12
			                                                                    23a7.5 7.5 0
			                                                                    0
			                                                                    1-5.138-12.963C8.204
			                                                                    8.774 11.5
			                                                                    6.5 11 1.5c6
			                                                                    4 9 8 3 14 1
			                                                                    0 2.5 0
			                                                                    5-2.47.27.773.5
			                                                                    1.604.5
			                                                                    2.47A7.5 7.5
			                                                                    0 0 1 12
			                                                                    23z"
                                        ></path>
                                      </svg>
                                      5480
                                    </span>
                                    <div
                                      className="min-read
			                                                            meta-info"
                                      title="3
			                                                            Min Read"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M6.382
			                                                                    5.968A8.962
			                                                                    8.962 0 0 1
			                                                                    12 4c2.125 0
			                                                                    4.078.736
			                                                                    5.618
			                                                                    1.968l1.453-1.453
			                                                                    1.414
			                                                                    1.414-1.453
			                                                                    1.453a9 9 0
			                                                                    1 1-14.064
			                                                                    0L3.515
			                                                                    5.93l1.414-1.414
			                                                                    1.453
			                                                                    1.453zM13
			                                                                    12V7.495L8
			                                                                    14h3v4.5l5-6.5h-3zM8
			                                                                    1h8v2H8V1z"
                                        ></path>
                                      </svg>
                                      3
                                    </div>
                                  </div>
                                  <img src={Post4Image} alt="" />
                                </div>
                              </div>
                              <div className="col-row col-12">
                                <div className="blog-wrap">
                                  <h3 className="blog-title">
                                    <a >
                                      Meet fennouni, Product Designer at GitHub
                                    </a>
                                  </h3>
                                  <p className="blog-excerpt">
                                    We felt frustrated that there was no product
                                    that focused specifically on interface
                                    design and we wanted to change that.{" "}
                                  </p>
                                  <div
                                    className="blog-author-detail
			                                                        d-flex
			                                                        justify-content-between
			                                                        align-items-center"
                                  >
                                    <div
                                      className="c-customer-review-meta
			                                                            d-flex
			                                                            justify-content-start
			                                                            align-items-center"
                                    >
                                      <div className="user">
                                        <img
                                          src={AvatarImage4}
                                          alt="avatar"
                                          className="avatar
			                                                                    avatar-sm
			                                                                    rounded-circle"
                                        />
                                      </div>
                                      <div
                                        className="meta
			                                                                pl-20"
                                      >
                                        <p className="name">Joshua William</p>
                                        <p className="author-post">
                                          Verified writer
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      className="font-semibold
			                                                            text-gray"
                                    >
                                      08 May
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="blog has_style_grid">
                            <div className="row align-items-center">
                              <div className="col-row col-12">
                                <div className="blog-img">
                                  <div className="meta absolute">
                                    <a
                                      
                                      className="comments
			                                                            meta-info mobile"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M2
			                                                                    8.994A5.99
			                                                                    5.99 0 0 1 8
			                                                                    3h8c3.313 0
			                                                                    6 2.695 6
			                                                                    5.994V21H8c-3.313
			                                                                    0-6-2.695-6-5.994V8.994zM14
			                                                                    11v2h2v-2h-2zm-6
			                                                                    0v2h2v-2H8z"
                                        ></path>
                                      </svg>
                                      <span className="comment-count">1</span>
                                    </a>
                                    <span
                                      className="views-counter
			                                                            meta-info mobile
			                                                            comments"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M12
			                                                                    23a7.5 7.5 0
			                                                                    0
			                                                                    1-5.138-12.963C8.204
			                                                                    8.774 11.5
			                                                                    6.5 11 1.5c6
			                                                                    4 9 8 3 14 1
			                                                                    0 2.5 0
			                                                                    5-2.47.27.773.5
			                                                                    1.604.5
			                                                                    2.47A7.5 7.5
			                                                                    0 0 1 12
			                                                                    23z"
                                        ></path>
                                      </svg>
                                      5480
                                    </span>
                                    <div
                                      className="min-read
			                                                            meta-info"
                                      title="3
			                                                            Min Read"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M6.382
			                                                                    5.968A8.962
			                                                                    8.962 0 0 1
			                                                                    12 4c2.125 0
			                                                                    4.078.736
			                                                                    5.618
			                                                                    1.968l1.453-1.453
			                                                                    1.414
			                                                                    1.414-1.453
			                                                                    1.453a9 9 0
			                                                                    1 1-14.064
			                                                                    0L3.515
			                                                                    5.93l1.414-1.414
			                                                                    1.453
			                                                                    1.453zM13
			                                                                    12V7.495L8
			                                                                    14h3v4.5l5-6.5h-3zM8
			                                                                    1h8v2H8V1z"
                                        ></path>
                                      </svg>
                                      3
                                    </div>
                                  </div>
                                  <img src={Post4Image} alt="" />
                                </div>
                              </div>
                              <div className="col-row col-12">
                                <div className="blog-wrap">
                                  <h3 className="blog-title">
                                    <a >
                                      Simple, beautiful interfaces are the
                                      future
                                    </a>
                                  </h3>
                                  <p className="blog-excerpt">
                                    hosting events, creating content and
                                    promoting the tool — and the creabik
                                    community started blowing up.
                                  </p>
                                  <div
                                    className="blog-author-detail
			                                                        d-flex
			                                                        justify-content-between
			                                                        align-items-center"
                                  >
                                    <div
                                      className="c-customer-review-meta
			                                                            d-flex
			                                                            justify-content-start
			                                                            align-items-center"
                                    >
                                      <div className="user">
                                        <img
                                          src={AvatarImage2}
                                          alt="avatar"
                                          className="avatar
			                                                                    avatar-sm
			                                                                    rounded-circle"
                                        />
                                      </div>
                                      <div
                                        className="meta
			                                                                pl-20"
                                      >
                                        <p className="name">Joshua William</p>
                                        <p className="author-post">
                                          Verified writer
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      className="font-semibold
			                                                            text-gray"
                                    >
                                      08 May
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="blog has_style_grid">
                            <div className="row align-items-center">
                              <div className="col-row col-12">
                                <div className="blog-img">
                                  <div className="meta absolute">
                                    <a
                                      
                                      className="comments
			                                                            meta-info mobile"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M2
			                                                                    8.994A5.99
			                                                                    5.99 0 0 1 8
			                                                                    3h8c3.313 0
			                                                                    6 2.695 6
			                                                                    5.994V21H8c-3.313
			                                                                    0-6-2.695-6-5.994V8.994zM14
			                                                                    11v2h2v-2h-2zm-6
			                                                                    0v2h2v-2H8z"
                                        ></path>
                                      </svg>
                                      <span className="comment-count">1</span>
                                    </a>
                                    <span
                                      className="views-counter
			                                                            meta-info mobile
			                                                            comments"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M12
			                                                                    23a7.5 7.5 0
			                                                                    0
			                                                                    1-5.138-12.963C8.204
			                                                                    8.774 11.5
			                                                                    6.5 11 1.5c6
			                                                                    4 9 8 3 14 1
			                                                                    0 2.5 0
			                                                                    5-2.47.27.773.5
			                                                                    1.604.5
			                                                                    2.47A7.5 7.5
			                                                                    0 0 1 12
			                                                                    23z"
                                        ></path>
                                      </svg>
                                      5480
                                    </span>
                                    <div
                                      className="min-read
			                                                            meta-info"
                                      title="3
			                                                            Min Read"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
			                                                                24"
                                        width={24}
                                        height={24}
                                      >
                                        <path
                                          fill="none"
                                          d="M0
			                                                                    0h24v24H0z"
                                        />
                                        <path
                                          d="M6.382
			                                                                    5.968A8.962
			                                                                    8.962 0 0 1
			                                                                    12 4c2.125 0
			                                                                    4.078.736
			                                                                    5.618
			                                                                    1.968l1.453-1.453
			                                                                    1.414
			                                                                    1.414-1.453
			                                                                    1.453a9 9 0
			                                                                    1 1-14.064
			                                                                    0L3.515
			                                                                    5.93l1.414-1.414
			                                                                    1.453
			                                                                    1.453zM13
			                                                                    12V7.495L8
			                                                                    14h3v4.5l5-6.5h-3zM8
			                                                                    1h8v2H8V1z"
                                        ></path>
                                      </svg>
                                      3
                                    </div>
                                  </div>
                                  <img src={Post4Image} alt="" />
                                </div>
                              </div>
                              <div className="col-row col-12">
                                <div className="blog-wrap">
                                  <h3 className="blog-title">
                                    <a >
                                      The Winner of the Vice Presidential Debate
                                    </a>
                                  </h3>
                                  <p className="blog-excerpt">
                                    I don't think there was any one tool that
                                    was the inspiration for creabik. We knew
                                    what we wanted to build, and I wanted an app{" "}
                                  </p>
                                  <div
                                    className="blog-author-detail
			                                                        d-flex
			                                                        justify-content-between
			                                                        align-items-center"
                                  >
                                    <div
                                      className="c-customer-review-meta
			                                                            d-flex
			                                                            justify-content-start
			                                                            align-items-center"
                                    >
                                      <div className="user">
                                        <img
                                          src={AvatarImage2}
                                          alt="avatar"
                                          className="avatar
			                                                                    avatar-sm
			                                                                    rounded-circle"
                                        />
                                      </div>
                                      <div
                                        className="meta
			                                                                pl-20"
                                      >
                                        <p className="name">Joshua William</p>
                                        <p className="author-post">
                                          Verified writer
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      className="font-semibold
			                                                            text-gray"
                                    >
                                      08 May
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-30">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" >
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link
			                                            is-active"
                              
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" >
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" >
                              <i
                                className="ri-arrow-right-s-line md
			                                                hydrated"
                                role="img"
                                aria-label="chevron forward
			                                                outline"
                              />{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ================================= sidebar */}
                <div className="col-lg-4">
                  {/* ================================= sidebar */}
                  <aside className="blog_sidebar">
                    {/* ============== widget */}
                    <div className="widget">
                      <h3 className="widget-title text-dark">Let’s connect</h3>
                      <div className="widget-wrap">
                        <div className="social-widget">
                          <a >
                            <div className="social_link facebook">
                              <i className="ri-facebook-box-line" />
                            </div>
                          </a>
                          <a >
                            <div className="social_link dribbble">
                              <i className="ri-dribbble-line" />
                            </div>
                          </a>
                          <a >
                            <div className="social_link youtube">
                              <i className="ri-youtube-line" />
                            </div>
                          </a>
                          <a >
                            <div className="social_link twitter">
                              <i className="ri-twitter-line" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ============== widget */}
                    <div className="widget">
                      <h3 className="widget-title text-dark">
                        Recent Articles
                      </h3>
                      <div className="widget-wrap">
                        <div className="Recent_Articles-widget">
                          {/* Slider main container */}
                          <div className="swiper-container sidebar_posts">
                            {/* Additional required wrapper */}
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                {/* Slides */}
                                <article className="item">
                                  <a  className="thumb hover-effect">
                                    <img src={Post1Image} alt="" />
                                  </a>
                                  <div className="info">
                                    <h4 className="title">
                                      <a >
                                        {" "}
                                        Review Of Photoshop CC Editing
                                        Techniques{" "}
                                      </a>
                                    </h4>
                                    <div className="time"> may 25, 2021</div>
                                  </div>
                                </article>
                                {/* Slides */}
                                <article className="item">
                                  <a  className="thumb hover-effect">
                                    <img src={Post2Image} alt="" />
                                  </a>
                                  <div className="info">
                                    <h4 className="title">
                                      <a >
                                        {" "}
                                        Drone Powered By AI Can Detect Obstacles
                                      </a>
                                    </h4>
                                    <div className="time"> may 25, 2021</div>
                                  </div>
                                </article>
                                {/* Slides */}
                                <article className="item">
                                  <a  className="thumb hover-effect">
                                    <img
                                      src="../assets/img/bg/small_post/3.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title">
                                      <a >
                                        {" "}
                                        5 Ways Animals Will Help You Get More
                                        Business
                                      </a>
                                    </h4>
                                    <div className="time"> may 25, 2021</div>
                                  </div>
                                </article>
                                {/* Slides */}
                                <article className="item">
                                  <a  className="thumb hover-effect">
                                    <img src={Post1Image} alt="" />
                                  </a>
                                  <div className="info">
                                    <h4 className="title">
                                      <a >
                                        {" "}
                                        Top 5 Unheard Interesting Facts About
                                        Basketball{" "}
                                      </a>
                                    </h4>
                                    <div className="time"> may 25, 2021</div>
                                  </div>
                                </article>
                              </div>
                              <div className="swiper-slide">
                                {/* Slides */}
                                <article className="item">
                                  <a  className="thumb hover-effect">
                                    src={Post4Image}
                                  </a>
                                  <div className="info">
                                    <h4 className="title">
                                      <a >
                                        {" "}
                                        Review Of Healthy Breakfast Meals For
                                        Energy Boost
                                      </a>
                                    </h4>
                                    <div className="time"> may 25, 2021</div>
                                  </div>
                                </article>
                                {/* Slides */}
                                <article className="item">
                                  <a  className="thumb hover-effect">
                                    <img src={Post4Image} alt="" />
                                  </a>
                                  <div className="info">
                                    <h4 className="title">
                                      <a >
                                        {" "}
                                        Review Of Healthy Breakfast Meals For
                                        Energy Boost
                                      </a>
                                    </h4>
                                    <div className="time"> may 25, 2021</div>
                                  </div>
                                </article>
                                {/* Slides */}
                                <article className="item">
                                  <a  className="thumb hover-effect">
                                    <img src={Post5Image} alt="" />
                                  </a>
                                  <div className="info">
                                    <h4 className="title">
                                      <a >
                                        {" "}
                                        How To Start Running Like A Pro
                                      </a>
                                    </h4>
                                    <div className="time"> may 25, 2021</div>
                                  </div>
                                </article>
                              </div>
                            </div>
                            {/* If we need navigation buttons */}
                            <div className="swiper-buttons-styling">
                              <div className="swiper-button-prev" />
                              <div className="swiper-button-next" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== widget */}
                    <div className="widget">
                      <h3 className="widget-title">Stay updated</h3>
                      <small className="mb-20">
                        Don’t miss our newest business blog posts. Sign up for
                        the newsletter!
                      </small>
                      <div className="widget-wrap">
                        <input
                          type="email"
                          className="form-control mt-10 mb-20"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                        <a
                          
                          className="btn w-100 btn-secondary sweep_letter sweep_top"
                        >
                          <div className="inside_item">
                            <span data-hover="Join with us!">
                              {" "}
                              Join with us!{" "}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* ============== widget */}
                    <div className="widget">
                      <h3 className="widget-title">Categories</h3>
                      <div className="widget-wrap">
                        <ul>
                          <li className="cat-item">
                            <a >About us</a>
                          </li>
                          <li className="cat-item">
                            <a >Business</a>
                          </li>
                          <li className="cat-item">
                            <a >General</a>
                          </li>
                          <li className="cat-item">
                            <a >Knowledge Base</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* ============== widget */}
                    <div className="widget">
                      <h3 className="widget-title">Tags</h3>
                      <div className="widget-wrap">
                        <div className="tag_cloud">
                          <a >
                            NFT
                          </a>
                          <a >
                            Raroin
                          </a>
                          <a >
                            btc
                          </a>
                          <a >
                            crypto
                          </a>
                          <a >
                            bankrupt
                          </a>
                          <a >
                            advantages
                          </a>
                          <a >
                            mint
                          </a>
                          <a >
                            creabik
                          </a>
                          <a >
                            design
                          </a>
                          <a >
                            design
                          </a>
                          <a >
                            envato
                          </a>
                          <a >
                            analytics
                          </a>
                          <a >
                            ceo
                          </a>
                          <a >
                            great
                          </a>
                          <a >
                            post
                          </a>
                          <a >
                            vlogs
                          </a>
                          <a >
                            daily work
                          </a>
                        </div>
                      </div>
                    </div>
                  </aside>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* End. blog_inner_list */}
          {/* End. simple-subscribe */}
        </main>
      </div>
      <Footer />
    </>
  );
};
