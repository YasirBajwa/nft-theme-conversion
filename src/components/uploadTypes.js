import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const UploadType = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
  <div className="hero__upload">
    <div className="container">
      <div className="space-y-20">
        <h1 className="text-center">Create single collectible</h1>
        <p className="hero__text text-center">
          Choose “Single” if you want your collectible to be one of a kind or
          “Multiple” if you want to sell one collectible multiple times
        </p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-6">
            <div className="box text-center">
              <img
                className="icon mb-20"
                src="assets/img/icons/single.svg"
                alt=""
              />
              <div className="space-y-10">
                <h5>Sell One Time</h5>
                <p className="color_text">
                  your collectible want to be one of a kind
                </p>
                <div className="hr" />
                <a className="btn btn-grad btn" >
                  create single
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box text-center">
              <img
                className="icon mb-20"
                src="assets/img/icons/multiple.svg"
                alt=""
              />
              <div className="space-y-10">
                <h5> Sell Multiple Time</h5>
                <p className="color_text">
                  your collectible want to be one of a kind
                </p>
                <div className="hr" />
                <a className="btn btn-grad btn" >
                  create multiple
                </a>
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
