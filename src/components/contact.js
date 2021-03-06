import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import ContactImage from "./../utils/img/bg/contact.png";

export const ContactPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="contact">
          <div className="row">
            <div className="col-md-4 contact__img">
              <div className="img__wrap">
                <img src={ContactImage} alt="" />
              </div>
            </div>
            <div className="col-md-8 contact__content">
              <div className="container">
                <div className="content__wrap space-y-20">
                  <div className="space-y-20">
                    <h1 className="text-left">Hi, π we are Raroin.</h1>
                    <p className="contact__desc">
                      Weβre here to help and answer any question you might have.{" "}
                      <br /> We look forward to hearing from you π
                    </p>
                  </div>
                  <div className="box is__big">
                    <div className="space-y-10 mb-0">
                      <div className="row">
                        <div className="col-sm-6 space-y-20">
                          <div className="space-y-10">
                            <span className="nameInput">Email address</span>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="contact@Creabik.com"
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Select Country</span>
                            <select
                              className="form-select
			                                            custom-select"
                              aria-label="Default
			                                            select example"
                            >
                              <option>United States</option>
                              <option>Finland</option>
                              <option>Norway</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 space-y-20 mt-10">
                          <div className="space-y-10">
                            <span className="nameInput">Full Name</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Creabik"
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Select a Subject</span>
                            <select
                              className="form-select
			                                            custom-select"
                              aria-label="Default
			                                            select example"
                            >
                              <option>Service Request</option>
                              <option>NFT items</option>
                              <option>Wallet</option>
                              <option>Purchase</option>
                              <option>Support</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 mt-20">
                          <div className="space-y-10">
                            <span className="nameInput">Message</span>
                            <textarea
                              style={{ minHeight: 110 }}
                              className="mb-0"
                              defaultValue={
                                "\t\t\t                                        "
                              }
                            />
                          </div>
                        </div>
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
