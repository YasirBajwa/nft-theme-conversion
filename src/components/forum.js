import React from "react";
import AvatarImage from "./../utils/img/avatars/avatar_1.png";
import Item1Image from "./../utils/img/items/item_1.png";
import Item2Image from "./../utils/img/items/item_2.png";
import Item3Image from "./../utils/img/items/item_3.png";
import { Header } from "./header";
import { Footer } from "./footer";
import liveImage from "./../utils/img/icons/live.svg";
import forumImage from "./../utils/img/bg/forum-post.png";

export const ForumPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />

        <div className="hero_forum bg_white">
          <div className="container">
            <div className="row align-items-center sm:space-y-20">
              <div className="col-lg-6 col-md-6 col-sm-12 space-y-10">
                <h1 className="text-left">Forum</h1>
                <p>
                  You can set preferred display name, create your profile URL
                  and manage other personal settings.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="search m-auto" style={{ maxWidth: 400 }}>
                  <input type="text" placeholder="Forum Search" />
                  <button className="result">
                    <i className="ri-search-line" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section forum mt-100">
          <div className="container-md">
            <div className="row sm:space-y-30">
              <div className="col-lg-8">
                <div className="forum__content">
                  <ul className="nav nav-tabs d-flex mb-30" role="tablist">
                    <li className="nav-item">
                      <a
                        className="btn btn-white btn-sm active"
                        data-toggle="tab"
                       
                        role="tab"
                      >
                        Recent Questions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-white btn-sm"
                        data-toggle="tab"
                       
                        role="tab"
                      >
                        Most Answered
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-white btn-sm"
                        data-toggle="tab"
                       
                        role="tab"
                      >
                        Bump Question
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-white btn-sm"
                        data-toggle="tab"
                       
                        role="tab"
                      >
                        Most Voted
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active space-y-30"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="box is__big space-y-20">
                        <div
                          className="d-flex justify-content-between
			                                    align-items-center"
                        >
                          <div
                            className="d-flex align-items-center
			                                        space-x-15"
                          >
                            <div className="avatars space-x-10">
                              <div className="media has_border">
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-forum"
                                  />
                                </a>
                              </div>
                              <div className="text-center">
                                <a >
                                  <p
                                    className="avatars_name
			                                                        color_brand"
                                  >
                                    @ayoub
                                  </p>
                                </a>
                              </div>
                            </div>
                            <div className="category">
                              <p className="color_black">
                                <span className="color_text">in:</span>
                                General
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="avatars space-x-3">
                              <div className="-space-x-20">
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <span className="total__avatars">+20</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="number">
                            <span>42</span>
                          </div>
                          <div className="space-y-20">
                            <a >
                              <h3 className="forum__title">
                                Localbitcoins Clone Script | Localbitcoins Clone
                                Software
                              </h3>
                            </a>
                            <p className="forum__desc">
                              Hey guys! New exploration about NFT Marketplace
                              Web Design, this time I'm inspired by one of my
                              favorite NFT website called Rarible (with crypto
                              payment)! What do you
                            </p>
                            <div className="tags">
                              <span>#NFT Marketplace</span>
                              <span>#crypto Artists</span>
                              <span>#NFT Artists</span>
                            </div>
                            <div className="hr" />
                            <div
                              className="d-flex
			                                            justify-content-between flex-wrap"
                            >
                              <div className="reaction">
                                <a
                                  
                                  className="likes
			                                                    space-x-3"
                                >
                                  <i className="ri-heart-3-fill" />
                                  <span className="txt_sm">2.1k</span>
                                </a>
                                <a
                                
                                  className="comments space-x-3"
                                >
                                  <i className="ri-chat-1-line" />
                                  <span className="txt_sm">257 Comments</span>
                                </a>
                                <span className="views space-x-3">
                                  <i className="ri-eye-line" />
                                  <span>257 Views</span>
                                </span>
                                <span className="time space-x-3">
                                  <i className="ri-time-line" />
                                  <span>2 days ago</span>
                                </span>
                              </div>
                              <div className="answer">
                                <a
                                  
                                  className="btn btn-dark
			                                                    btn-sm"
                                >
                                  Answer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box is__big space-y-20">
                        <div
                          className="d-flex justify-content-between
			                                    align-items-center"
                        >
                          <div
                            className="d-flex align-items-center
			                                        space-x-15"
                          >
                            <div className="avatars space-x-10">
                              <div className="media has_border">
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-forum"
                                  />
                                </a>
                              </div>
                              <div className="text-center">
                                <a >
                                  <p
                                    className="avatars_name
			                                                        color_brand"
                                  >
                                    @ayoub
                                  </p>
                                </a>
                              </div>
                            </div>
                            <div className="category">
                              <p className="color_black">
                                <span className="color_text">in:</span>
                                General
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="avatars space-x-3">
                              <div className="-space-x-20">
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <span className="total__avatars">+20</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="number">
                            <span>25</span>
                          </div>
                          <div className="space-y-20">
                            <a >
                              <h3 className="forum__title">
                                Thank you you all for making this community a
                                nice place to learn about NFTシ
                              </h3>
                            </a>
                            <p className="forum__desc">
                              Hey guys! I want to start buying interest art from
                              crypto artists so please feel free to share
                              anything. I really love animated pieces and 3d
                              stuff, but I’d give a try to anything different or
                              new (for me) like AR nft ...
                            </p>
                            <img
                              className="img-fluid"
                              src={forumImage}
                              alt=""
                            />
                            <div className="tags">
                              <span>#crypto Artists</span>
                              <span>#NFT Artists</span>
                              <span>#3d Art</span>
                            </div>
                            <div className="hr" />
                            <div
                              className="d-flex
			                                            justify-content-between flex-wrap"
                            >
                              <div className="reaction">
                                <a
                                  
                                  className="likes
			                                                    space-x-3"
                                >
                                  <i className="ri-heart-3-fill" />
                                  <span className="txt_sm">5.1k</span>
                                </a>
                                <a
                                
                                  className="comments space-x-3"
                                >
                                  <i className="ri-chat-1-line" />
                                  <span className="txt_sm">563 Comments</span>
                                </a>
                                <span className="views space-x-3">
                                  <i className="ri-eye-line" />
                                  <span>700 Views</span>
                                </span>
                                <span className="time space-x-3">
                                  <i className="ri-time-line" />
                                  <span>8 days ago</span>
                                </span>
                              </div>
                              <div className="answer">
                                <a
                                  
                                  className="btn btn-dark
			                                                    btn-sm"
                                >
                                  Answer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box is__big space-y-20">
                        <div
                          className="d-flex justify-content-between
			                                    align-items-center"
                        >
                          <div
                            className="d-flex align-items-center
			                                        space-x-15"
                          >
                            <div className="avatars space-x-10">
                              <div className="media has_border">
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-forum"
                                  />
                                </a>
                              </div>
                              <div className="text-center">
                                <a >
                                  <p
                                    className="avatars_name
			                                                        color_brand"
                                  >
                                    @ayoub
                                  </p>
                                </a>
                              </div>
                            </div>
                            <div className="category">
                              <p className="color_black">
                                <span className="color_text">in:</span>
                                General
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="avatars space-x-3">
                              <div className="-space-x-20">
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <span className="total__avatars">+20</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="number">
                            <span>17</span>
                          </div>
                          <div className="space-y-20">
                            <a >
                              <h3 className="forum__title">
                                Why to Create an NFT On the Cardano Blockchain?
                              </h3>
                            </a>
                            <p className="forum__desc">
                              Hey guys! NFTs, and especially NFT markets, have
                              democratized the whole collectible art ecosystem.
                              As a result, the new blockchain should make it
                              simple for anybody to build their own NFT and
                              trade it without difficulty. The possession of a
                              ...
                            </p>
                            <div className="tags">
                              <span>#blockchain</span>
                              <span>#Cardano</span>
                              <span>#art ecosystem</span>
                            </div>
                            <div className="hr" />
                            <div
                              className="d-flex
			                                            justify-content-between flex-wrap"
                            >
                              <div className="reaction">
                                <a
                                  
                                  className="likes
			                                                    space-x-3"
                                >
                                  <i className="ri-heart-3-fill" />
                                  <span className="txt_sm">3.1k</span>
                                </a>
                                <a
                                
                                  className="comments space-x-3"
                                >
                                  <i className="ri-chat-1-line" />
                                  <span className="txt_sm">357 Comments</span>
                                </a>
                                <span className="views space-x-3">
                                  <i className="ri-eye-line" />
                                  <span>134 Views</span>
                                </span>
                                <span className="time space-x-3">
                                  <i className="ri-time-line" />
                                  <span>4 days ago</span>
                                </span>
                              </div>
                              <div className="answer">
                                <a
                                  
                                  className="btn btn-dark
			                                                    btn-sm"
                                >
                                  Answer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box is__big space-y-20">
                        <div
                          className="d-flex justify-content-between
			                                    align-items-center"
                        >
                          <div
                            className="d-flex align-items-center
			                                        space-x-15"
                          >
                            <div className="avatars space-x-10">
                              <div className="media has_border">
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-forum"
                                  />
                                </a>
                              </div>
                              <div className="text-center">
                                <a >
                                  <p
                                    className="avatars_name
			                                                        color_brand"
                                  >
                                    @ayoub
                                  </p>
                                </a>
                              </div>
                            </div>
                            <div className="category">
                              <p className="color_black">
                                <span className="color_text">in:</span>
                                General
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="avatars space-x-3">
                              <div className="-space-x-20">
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a
                                  className="d-none d-sm-inline"
                                  
                                >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <a >
                                  <img
                                    src={AvatarImage}
                                    alt="Avatar"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                </a>
                                <span className="total__avatars">+20</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="number">
                            <span>34</span>
                          </div>
                          <div className="space-y-20">
                            <a >
                              <h3 className="forum__title">
                                Localbitcoins Clone Script | Localbitcoins Clone
                                Software
                              </h3>
                            </a>
                            <p className="forum__desc">
                              Binance Clone App to launch the Cryptocurrency
                              Exchange App like Binance App. At Maticz, we
                              provide an advanced Binance Exchange Clone App to
                              launch Crypto trading App like Binance. Our
                              Binance Clone App is highly scalable, robust, and
                              supports cross-platform compatibility. Now ...
                            </p>
                            <div className="tags">
                              <span>#binance</span>
                              <span>#binance clone</span>
                              <span>#binance clone script</span>
                            </div>
                            <div className="hr" />
                            <div
                              className="d-flex
			                                            justify-content-between flex-wrap"
                            >
                              <div className="reaction">
                                <a
                                  
                                  className="likes
			                                                    space-x-3"
                                >
                                  <i className="ri-heart-3-fill" />
                                  <span className="txt_sm">4.4k</span>
                                </a>
                                <a
                                
                                  className="comments space-x-3"
                                >
                                  <i className="ri-chat-1-line" />
                                  <span className="txt_sm">852 Comments</span>
                                </a>
                                <span className="views space-x-3">
                                  <i className="ri-eye-line" />
                                  <span>264 Views</span>
                                </span>
                                <span className="time space-x-3">
                                  <i className="ri-time-line" />
                                  <span>6 days ago</span>
                                </span>
                              </div>
                              <div className="answer">
                                <a
                                  
                                  className="btn btn-dark
			                                                    btn-sm"
                                >
                                  Answer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                      <p>2</p>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                      <p>3</p>
                    </div>
                    <div className="tab-pane" id="tabs-4" role="tabpanel">
                      <p>4</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar space-y-30">
                  <a  className="btn btn-grad w-100">
                    <i className="ri-add-line" />
                    Start New Topic
                  </a>
                  <div className="space-y-10">
                    <h5>Categories</h5>
                    <div className="box space-y-10 is__big">
                      <div className="d-flex justify-content-between">
                        <span className="color-black">General</span>
                        <span className="light_bg">346</span>
                      </div>
                      <div className="hr" />
                      <div className="d-flex justify-content-between">
                        <span className="color-black">NFT Update</span>
                        <span className="light_bg">346</span>
                      </div>
                      <div className="hr" />
                      <div className="d-flex justify-content-between">
                        <span className="color-black">Marketplace</span>
                        <span className="light_bg">346</span>
                      </div>
                      <div className="hr" />
                      <div className="d-flex justify-content-between">
                        <span className="color-black">Platform Update</span>
                        <span className="light_bg">346</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-10">
                    <h5>Popular Tags</h5>
                    <div className="box popular-tags is__big">
                      <div className="tags_items">
                        <span className="light_bg mr-10">#bitcoinpr</span>
                        <span className="light_bg">#cryptopressrelease</span>
                        <span className="light_bg">#nftcommunity</span>
                        <span className="light_bg">#nftcollector</span>
                        <span className="light_bg">#nftartist </span>
                        <span className="light_bg">#opensea</span>
                        <span className="light_bg">#nftartbtc</span>
                        <span className="light_bg">#nftartbtc</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-10">
                    <div className="d-flex space-x-10">
                      <img src={liveImage} alt="" style={{ width: 13 }} />
                      <h5>Live auctions</h5>
                    </div>
                    <div className="box space-y-30">
                      <div className="card__item two">
                        <div className="card_body space-y-10">
                          {/* =============== */}
                          <div className="card_head">
                            <a >
                              <img src={Item1Image} alt="" />
                            </a>
                            <div className="block_timer">
                              <div
                                className="d-flex
			                                                justify-content-center
			                                                align-items-center"
                              >
                                <div className="item">
                                  <div className="number hours" />
                                </div>
                                <div className="dots">:</div>
                                <div className="item">
                                  <div className="number minutes" />
                                </div>
                                <div className="dots">:</div>
                                <div className="item">
                                  <div className="number seconds" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="details d-flex
			                                            justify-content-between"
                            >
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
                            <a
                              className="color_black"
                            
                            >
                              Colorful Abstract Painting
                            </a>
                          </h6>
                          <div className="hr" />
                          <div
                            className="card_footer
			                                        justify-content-between"
                          >
                            <div className="creators">
                              <div className="avatars space-x-3">
                                <div className="-space-x-20">
                                  <a >
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
			                                                            avatar-sm"
                                    />
                                  </a>
                                  <a >
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
			                                                            avatar-sm"
                                    />
                                  </a>
                                </div>
                                <a >
                                  <p
                                    className="avatars_name
			                                                        txt_sm
			                                                        color_black"
                                  >
                                    @darian_barry
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
                      <div className="card__item two">
                        <div className="card_body space-y-10">
                          {/* =============== */}
                          <div className="card_head">
                            <a >
                              <img src={Item2Image} alt="" />
                            </a>
                            <div className="block_timer">
                              <div
                                className="d-flex
			                                                justify-content-center
			                                                align-items-center"
                              >
                                <div className="item">
                                  <div className="number hours" />
                                </div>
                                <div className="dots">:</div>
                                <div className="item">
                                  <div className="number minutes" />
                                </div>
                                <div className="dots">:</div>
                                <div className="item">
                                  <div className="number seconds" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="details d-flex
			                                            justify-content-between"
                            >
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
                            <a
                              className="color_black"

                            >
                              Synthwave Modern Painting
                            </a>
                          </h6>
                          <div className="hr" />
                          <div
                            className="card_footer
			                                        justify-content-between"
                          >
                            <div className="creators">
                              <div className="avatars space-x-3">
                                <div className="-space-x-20">
                                  <a >
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
			                                                            avatar-sm"
                                    />
                                  </a>
                                  <a >
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
			                                                            avatar-sm"
                                    />
                                  </a>
                                </div>
                                <a >
                                  <p
                                    className="avatars_name
			                                                        txt_sm
			                                                        color_black"
                                  >
                                    @makinzi_beck
                                  </p>
                                </a>
                              </div>
                            </div>
                            <a  className="space-x-3">
                              <p className="color_green txt_sm">0.047 ETH</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card__item two">
                        <div className="card_body space-y-10">
                          {/* =============== */}
                          <div className="card_head">
                            <a >
                              <img src={Item3Image} alt="" />
                            </a>
                            <div className="block_timer">
                              <div
                                className="d-flex
			                                                justify-content-center
			                                                align-items-center"
                              >
                                <div className="item">
                                  <div className="number hours" />
                                </div>
                                <div className="dots">:</div>
                                <div className="item">
                                  <div className="number minutes" />
                                </div>
                                <div className="dots">:</div>
                                <div className="item">
                                  <div className="number seconds" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="details d-flex
			                                            justify-content-between"
                            >
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
                            <a
                              className="color_black"

                            >
                              The girl with the firefly
                            </a>
                          </h6>
                          <div className="hr" />
                          <div
                            className="card_footer
			                                        justify-content-between"
                          >
                            <div className="creators">
                              <div className="avatars space-x-3">
                                <div className="-space-x-20">
                                  <a >
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
			                                                            avatar-sm"
                                    />
                                  </a>
                                  <a >
                                    <img
                                      src={AvatarImage}
                                      alt="Avatar"
                                      className="avatar
			                                                            avatar-sm"
                                    />
                                  </a>
                                </div>
                                <a >
                                  <p
                                    className="avatars_name
			                                                        txt_sm
			                                                        color_black"
                                  >
                                    @jaxon_duffy
                                  </p>
                                </a>
                              </div>
                            </div>
                            <a  className="space-x-3">
                              <p className="color_green txt_sm">0.074 ETH</p>
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
        </section>
      </div>
      <Footer />
    </>
  );
};
