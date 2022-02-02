import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

export const Upcoming = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <>
  <div className="hero_upcoming_projects bg_white">
    <div className="container">
      <div className="space-y-20">
        <h1 className="text-center hero__title">Upcoming NFT Projects</h1>
        <p className="text-center hero__desc">
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>
    </div>
  </div>
  <section className="section upcoming_projects mt-100">
    <div className="container">
      <div className="space-x-10 d-flex align-items-center mb-20">
        <div className="calendar_icon">
          <i className="ri-calendar-event-line" />
        </div>
        <h3>September 16th</h3>
      </div>
      <div className="box d-flex table-responsive">
        <table className="table upcoming_projects">
          <thead>
            <tr>
              <th scope="col">
                <span>Project</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-link" />
                <span>Links</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-time-line" />
                <span>Time</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-price-tag-3-line" />
                <span>Count</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-money-dollar-circle-line" />
                <span>Price</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-file-line" />
                <span>Extras</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="color_black">The Botties</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">10 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-100%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $200, 1 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">Hell Hounds</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">9 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-900%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $400, 1 SOL</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="color_black">Red Dead</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">8 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-750%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $300, 1 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">Phantoms</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">7 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-10%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $100, 1 SOL</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="color_black">CrowPunks</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">6 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-150%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $700, 1 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">Halloween</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">5 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-50%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $400, 1 SOL</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="color_black">Nomad Presale</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">4 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-26%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $100, 2 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">ClubCards</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">3 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-97%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $200, 1 SOL</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="section upcoming_projects mt-100">
    <div className="container">
      <div className="space-x-10 d-flex align-items-center mb-20">
        <div className="calendar_icon">
          <i className="ri-calendar-event-line" />
        </div>
        <h3>September 17th</h3>
      </div>
      <div className="box d-flex table-responsive">
        <table className="table upcoming_projects">
          <thead>
            <tr>
              <th scope="col">
                <span>Project</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-link" />
                <span>Links</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-time-line" />
                <span>Time</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-price-tag-3-line" />
                <span>Count</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-money-dollar-circle-line" />
                <span>Price</span>
              </th>
              <th className="space-x-5" scope="col">
                <i className="ri-file-line" />
                <span>Extras</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="color_black">NFBeans</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">10 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-700%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $200, 1 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">The Hourglass</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">9 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-900%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $400, 1 SOL</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="color_black">Deaf beef</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">8 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-450%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $500, 1 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">PEGZ</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">7 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-10%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $100, 2 SOL</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="color_black">CrowPunks</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">6 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-180%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $700, 1 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">Halloween</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">5 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-50%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $200, 1 SOL</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="color_black">Nomad Presale</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">4 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-260%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $400, 1 SOL</span>
              </td>
            </tr>
            <tr className="white">
              <td>
                <span className="color_black">ClubCards</span>
              </td>
              <td>
                <img
                  className="imh-fluid"
                  src="/assets/img/icons/browsers.png"
                  alt=""
                />
              </td>
              <td>
                <span className="color_green">3 PM UTC</span>
              </td>
              <td>
                <span className="color_red">-987%</span>
              </td>
              <td>
                <span className="color_info">Free mint</span>
              </td>
              <td>
                <span className="color_black">If SOL is above $500, 1 SOL</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</>

      </div>
      <Footer />
    </>
  );
};
