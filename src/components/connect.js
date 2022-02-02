import React from "react";
import Logo from "./../utils/img/logos/Logo.svg";
import MetaMask from "./../utils/img/icons/metamask.svg";
import { Header } from "./header";
import { Footer } from "./footer";
import CoinImage from "./../utils/img/icons/coibase.svg";
import tourImage from "./../utils/img/icons/torus.svg";
import FormaticImage from "./../utils/img/icons/fortmatic.svg";
import BiskiImage from "./../utils/img/icons/bitski.svg";
import WalletImage from "./../utils/img/icons/walletconnect.svg";

export const ConnectWallet = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div
          className="modal fade popup"
          id="popup_connected"
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
                <h3 className="text-center">Wallet Connected!</h3>
                <p className="text-center">
                  You have sucessfully connected your wallet, now you can start
                  bidding or upload your own art!
                </p>
                <div className="d-flex justify-content-center space-x-20">
                  <a  data-dismiss="modal" className="btn btn-dark">
                    Discover Assets
                  </a>
                  <a  className="btn btn-grad">
                    {" "}
                    Create item
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade popup"
          id="popup_error"
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
                <h3 className="color_red">Error!</h3>
                <p>
                  User rejected the request.. <br />
                  If the problem persist please Contact support
                </p>
                <a  className="btn btn-primary">
                  {" "}
                  Try again
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="effect">
          <div className="container">
            <a  className="btn btn-white btn-sm mt-20">
              Back to home
            </a>
            <div className="hero__wallets pt-100 pb-50">
              <div className="space-y-20 d-flex flex-column align-items-center">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
                <h2 className="text-center">Connect your wallet</h2>
                <p className="text-center">
                  Connect with one of available wallet providers or create a new
                  wallet.
                </p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="wallets">
                  <div className="row mb-20_reset">
                    {/* ================= item */}
                    <div className="col-lg-4">
                      <a
                        
                        className="box in__wallet space-y-10"
                        data-toggle="modal"
                        data-target="#popup_connected"
                      >
                        <div className="logo">
                          <img src={CoinImage} alt="logo_community" />
                        </div>
                        <h5 className="text-center">coibase</h5>
                        <p className="text-center">
                          wallet that works on both mobile and through a browser
                          extension
                        </p>
                      </a>
                    </div>
                    {/* ================= item */}
                    <div className="col-lg-4">
                      <a
                        
                        className="box in__wallet space-y-10"
                        data-toggle="modal"
                        data-target="#popup_error"
                      >
                        <div className="logo">
                          <img src={MetaMask} alt="logo_community" />
                        </div>
                        <h5 className="text-center">metamask</h5>
                        <p className="text-center">
                          A browser extension with great flexibility. The web's
                          popular wallet
                        </p>
                      </a>
                    </div>
                    {/* ================= item */}
                    <div className="col-lg-4">
                      <a
                        
                        className="box in__wallet space-y-10"
                        data-toggle="modal"
                        data-target="#popup_connected"
                      >
                        <div className="logo">
                          <img src={tourImage} alt="logo_community" />
                        </div>
                        <h5 className="text-center">torus</h5>
                        <p className="text-center">
                          Log in with Google, Facebook, or other OAuth providers
                        </p>
                      </a>
                    </div>
                    {/* ================= item */}
                    <div className="col-lg-4">
                      <a
                        
                        className="box in__wallet space-y-10"
                        data-toggle="modal"
                        data-target="#popup_error"
                      >
                        <div className="logo">
                          <img src={FormaticImage} alt="logo_community" />
                        </div>
                        <h5 className="text-center">fortmatic</h5>
                        <p className="text-center">
                          wallet that allows you to sign up with your phone
                          number on any device
                        </p>
                      </a>
                    </div>
                    {/* ================= item */}
                    <div className="col-lg-4">
                      <a
                        
                        className="box in__wallet space-y-10"
                        data-toggle="modal"
                        data-target="#popup_connected"
                      >
                        <div className="logo">
                          <img src={BiskiImage} alt="logo_community" />
                        </div>
                        <h5 className="text-center">bitski</h5>
                        <p className="text-center">
                          wallet that allows you to sign in with an email and
                          password
                        </p>
                      </a>
                    </div>
                    {/* ================= item */}
                    <div className="col-lg-4">
                      <a
                        
                        className="box in__wallet space-y-10"
                        data-toggle="modal"
                        data-target="#popup_error"
                      >
                        <div className="logo">
                          <img src={WalletImage} alt="logo_community" />
                        </div>
                        <h5 className="text-center">walletconnect</h5>
                        <p className="text-center">
                          Log in with Google, Facebook, or other OAuth provider
                        </p>
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
