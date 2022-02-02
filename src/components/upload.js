import React from "react";
import { Header } from "./header";

export const Upload = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
  <div className="hero__upload">
    <div className="container">
      <div className="space-y-20">
        <a
          href="upload-type.html"
          className="btn btn-white btn-sm
			                switch"
        >
          Switch to Multiple
        </a>
        <h2 className="title">Create single collectible</h2>
      </div>
    </div>
  </div>
  <div
    className="modal fade popup"
    id="popup_preview"
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
        <div className="modal-body space-y-20 p-0">
          <div className="card__item three m-0 in__popup">
            <div className="card_body space-y-10">
              {/* ???? =============== */}
              <div className="card_head">
                <img src="assets/img/items/item_4.png" alt="" />
                <a href="#" className="likes space-x-3">
                  <i className="ri-heart-3-fill" />
                  <span className="txt_sm">2.1k</span>
                </a>
                <div className="action">
                  <a href="#" className="btn btn-primary btn-sm">
                    <i className="ri-pie-chart-line color_white" />
                    Place Your Bid
                  </a>
                </div>
              </div>
              {/* ???? =============== */}
              <h6 className="card_title">Colorful Abstract Painting</h6>
              <div className="card_footer d-block space-y-10">
                <div className="d-flex justify-content-between">
                  <div className="creators space-x-10">
                    <div className="avatars -space-x-20">
                      <a href="Profile.html">
                        <img
                          src="assets/img/avatars/avatar_3.png"
                          alt="Avatar"
                          className="avatar
															avatar-sm"
                        />
                      </a>
                      <a href="Profile.html">
                        <img
                          src="assets/img/avatars/avatar_2.png"
                          alt="Avatar"
                          className="avatar
															avatar-sm"
                        />
                      </a>
                    </div>
                    <a href="Profile.html">
                      <p className="avatars_name txt_sm">@makinzi_jamy... </p>
                    </a>
                  </div>
                  <a href="#" className="space-x-3">
                    <p className="color_green txt_sm">0.001 ETH</p>
                  </a>
                </div>
                <div className="hr" />
                <a
                  href="#"
                  className="d-flex align-items-center
											space-x-10"
                >
                  <i className="ri-vip-crown-line" />
                  <p className="color_text txt_sm" style={{ width: "auto" }}>
                    Highest bid
                  </p>
                  <span className="color_black txt_sm">0.001 ETH</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="box in__upload mb-120">
      <div className="row">
        <div className="col-lg-6">
          <div className="left__part space-y-40 md:mb-20 upload_file">
            <div className="space-y-20">
              <img className="icon" src="assets/img/icons/upload.svg" alt="" />
              <h5>Drag and drop your file</h5>
              <p className="color_text">
                PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
              </p>
            </div>
            <div className="space-y-20">
              <p className="color_text">or choose a file</p>
              <a href="#" className="btn btn-white">
                {" "}
                Browse files{" "}
              </a>
              <input type="file" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group space-y-10">
            <div className="space-y-20">
              <div className="space-y-10">
                <span className="nameInput">Title</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e. g. `raroin design art`"
                />
              </div>
              <div className="space-y-10">
                <span className="nameInput">
                  Description <span className="color_text">(optional) </span>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e. g. `raroin design art`"
                />
              </div>
              <div className="space-y-10">
                <span className="variationInput">Price</span>
                <select
                  className="form-select custom-select"
                  aria-label="Default select example"
                >
                  <option> 00.00 ETH</option>
                  <option>01.00 ETH</option>
                  <option>02.00 ETH</option>
                  <option>10.00 ETH</option>
                  <option>20.00 ETH</option>
                </select>
              </div>
              <div className="space-y-10">
                <span className="variationInput">Choose collection</span>
                <div className="d-flex flex-column flex-md-row">
                  <a
                    href=""
                    className="choose_collection mb-10
												mb-md-0 mr-0 mr-md-3"
                  >
                    <div className="icon">
                      <i className="ri-add-line" />
                    </div>
                    New collection
                  </a>
                  <a href="" className="choose_collection is_brand">
                    <img src="assets/img/icons/raroin_icon.svg" alt="" />
                    Raroin Collection{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="color_black">
            <span className="color_text text-bold"> Service fee : </span>
            2.5%
          </p>{" "}
          <p className="color_black">
            <span className="color_text text-bold"> You will receive :</span>
            22.425 ETH $41,637.78
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div className="fixed_row bottom-0 left-0 right-0">
    <div className="container">
      <div className="row content justify-content-between mb-20_reset">
        <div className="col-md-auto col-12 mb-20">
          <div className="space-x-10">
            <a
              href="Upload.html"
              className="btn btn-white
									others_btn"
            >
              {" "}
              Cancel
            </a>
            <a
              href="#"
              className="btn btn-dark others_btn"
              data-toggle="modal"
              data-target="#popup_preview"
            >
              {" "}
              Preview
            </a>
          </div>
        </div>
        <div className="col-md-auto col-12 mb-20">
          <a
            href="Item-details.html"
            className="btn btn-grad
								btn_create"
          >
            {" "}
            Create item
          </a>
        </div>
      </div>
    </div>
  </div>
      </div>
    </>
  );
};
