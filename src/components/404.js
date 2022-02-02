import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";
import SkullImage from "./../utils/img/bg/left-Skull.png";
import ErrorImage from "./../utils/img/bg/404.png";
import RSkullImage from "./../utils/img/bg/right-Skull.png";
import { useNavigate } from 'react-router-dom';

export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="not__found">
          <div className="container">
            <div className="row justify-content-center align-items-center pt-100">
              <div className="col-lg-3 d-none d-lg-block">
                <img className="img-fluid" src={SkullImage} alt="" />
              </div>
              <div className="col-lg-6">
                <div className="space-y-30 content">
                  <div
                    className="space-y-20 d-flex flex-column
			                        justify-content-center align-items-center"
                  >
                    <img src={ErrorImage} alt="" />
                    <h2 className="text-center">whooops 🥺! Page not Found</h2>
                    <p className="text-center">
                      Maybe bigfoot has broken this page. Come back to the
                      Homepage
                    </p>
                    <div>
                      <a className="btn btn-grad" onClick={() =>navigate("/")}>
                        Go Back
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-none d-lg-block">
                <img className="img-fluid" src={RSkullImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
