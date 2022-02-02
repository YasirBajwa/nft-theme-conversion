import React from "react";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import { Header } from "./header";
import { Footer } from "./footer";
import CoverImage from "./../utils/img/bg/cover.jpg";

export const Creators = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />

        <div className="hero__creators">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="space-y-20">
                  <h1>Popular Creators</h1>
                  <p className="hero__text">
                    I make art with the simple goal of giving you something
                    pleasing to look at for a few seconds.
                  </p>
                </div>
              </div>
              <div className="col-lg-auto">
                <a className="btn btn-dark" >
                  {" "}
                  be one of our creators
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
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
                    <div className="has_number">1</div>
                  </div>
                  <div className="text-center">
                    <a >
                      <p className="avatars_name large color_black">
                        @jimena_stark
                      </p>
                    </a>
                    <span className="sales color_text">
                      4 sales on 14.28 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    <div className="has_number">2</div>
                  </div>
                  <div className="text-center">
                    <a >
                      <p className="avatars_name large color_black">
                        @makinzi_beck
                      </p>
                    </a>
                    <span className="sales color_text">
                      16 sales on 8.04 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    <div className="has_number">3</div>
                  </div>
                  <div className="text-center">
                    <a >
                      <p className="avatars_name large color_black">
                        @jaxon_duffy
                      </p>
                    </a>
                    <span className="sales color_text">
                      4 sales on 12.53 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    <div className="has_number">4</div>
                  </div>
                  <div className="text-center">
                    <a >
                      <p className="avatars_name large color_black">
                        @darian_barry
                      </p>
                    </a>
                    <span className="sales color_text">
                      62 sales on 7.26 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__body mt-100 space-y-20">
          <div className="row mb-20_reset">
            <div className="col-lg-4">
              <div className="creator_item creator_card space-y-20 mb-20">
                <div className="avatars flex-column space-y-10">
                  <div className="cover">
                    <img src={CoverImage} alt="Avatar" className="img-fluid" />
                  </div>
                  <div className="media">
                    <a >
                      <img
                        src={AvatarImage2}
                        alt="Avatar"
                        className="avatar
														avatar-md"
                      />
                    </a>
                  </div>
                  <div className="details text-center">
                    <div>
                      <p className="color_black txt_lg">
                        191
                        <span className="txt_sm">ETH</span>
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
            <div className="col-lg-4">
              <div className="creator_item creator_card space-y-20 mb-20">
                <div className="avatars flex-column space-y-10">
                  <div className="cover">
                    <img src={CoverImage} alt="Avatar" className="img-fluid" />
                  </div>
                  <div className="media">
                    <a >
                      <img
                        src={AvatarImage2}
                        alt="Avatar"
                        className="avatar
														avatar-md"
                      />
                    </a>
                  </div>
                  <div className="details text-center">
                    <div>
                      <p className="color_black txt_lg">
                        191
                        <span className="txt_sm">ETH</span>
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
            <div className="col-lg-4">
              <div className="creator_item creator_card space-y-20 mb-20">
                <div className="avatars flex-column space-y-10">
                  <div className="cover">
                    <img src={CoverImage} alt="Avatar" className="img-fluid" />
                  </div>
                  <div className="media">
                    <a >
                      <img
                        src={AvatarImage2}
                        alt="Avatar"
                        className="avatar
														avatar-md"
                      />
                    </a>
                  </div>
                  <div className="details text-center">
                    <div>
                      <p className="color_black txt_lg">
                        191
                        <span className="txt_sm">ETH</span>
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
            <div className="col-lg-4">
              <div className="creator_item creator_card space-y-20 mb-20">
                <div className="avatars flex-column space-y-10">
                  <div className="cover">
                    <img src={CoverImage} alt="Avatar" className="img-fluid" />
                  </div>
                  <div className="media">
                    <a >
                      <img
                        src={AvatarImage2}
                        alt="Avatar"
                        className="avatar
														avatar-md"
                      />
                    </a>
                  </div>
                  <div className="details text-center">
                    <div>
                      <p className="color_black txt_lg">
                        191
                        <span className="txt_sm">ETH</span>
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
            <div className="col-lg-4">
              <div className="creator_item creator_card space-y-20 mb-20">
                <div className="avatars flex-column space-y-10">
                  <div className="cover">
                    <img src={CoverImage} alt="Avatar" className="img-fluid" />
                  </div>
                  <div className="media">
                    <a >
                      <img
                        src={AvatarImage2}
                        alt="Avatar"
                        className="avatar
														avatar-md"
                      />
                    </a>
                  </div>
                  <div className="details text-center">
                    <div>
                      <p className="color_black txt_lg">
                        191
                        <span className="txt_sm">ETH</span>
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
            <div className="col-lg-4">
              <div className="creator_item creator_card space-y-20 mb-20">
                <div className="avatars flex-column space-y-10">
                  <div className="cover">
                    <img src={CoverImage} alt="Avatar" className="img-fluid" />
                  </div>
                  <div className="media">
                    <a >
                      <img
                        src={AvatarImage2}
                        alt="Avatar"
                        className="avatar
														avatar-md"
                      />
                    </a>
                  </div>
                  <div className="details text-center">
                    <div>
                      <p className="color_black txt_lg">
                        191
                        <span className="txt_sm">ETH</span>
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
      <Footer />
    </>
  );
};
