import React from "react";
import AvatarImage2 from "./../utils/img/avatars/avatar_2.png";
import AvatarImage3 from "./../utils/img/avatars/avatar_3.png";
import AvatarImage4 from "./../utils/img/avatars/avatar_4.png";
import AvatarImage11 from "./../utils/img/avatars/avatar_11.png";
import { Header } from "./header";
import { Footer } from "./footer";
import Post1Image from "./../utils/img/small_post/1.jpg";
import Post2Image from "./../utils/img/small_post/2.jpg";
import Post3Image from "./../utils/img/small_post/3.jpg";
import Post4Image from "./../utils/img/small_post/4.jpg";
import Post5Image from "./../utils/img/small_post/5.jpg";
import Post6Image from "./../utils/img/small_post/6.jpg";
import ArticleImage from "./../utils/img/bg/article.jpg";

export const Article = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="container article_page pt-100">
          <div className="main row" id="main-content">
            <div className="col-lg-8">
              <div id="content">
                <div className="article_wrap mt-0">
                  <div className="content">
                    <img
                      className="mb-30 img-fluid w-full img_article"
                      alt=""
                      src={ArticleImage}
                    />
                    <h1 className="mb-40">
                      {" "}
                      NFT is coming soon: join the waitlist today for early
                      access
                    </h1>
                    <div
                      className="blog-author-detail d-flex
			                            justify-content-between align-items-center"
                    >
                      <div
                        className="author-meta d-flex justify-content-start
			                                align-items-center"
                      >
                        <div className="user">
                          <img
                            src={AvatarImage11}
                            alt="..."
                            className="avatar avatar-sm rounded-circle
			                                        w-full"
                          />
                        </div>
                        <div className="meta pl-20">
                          <p className="name color_brand">Joshua William</p>
                          <p className="author-post">Author </p>
                        </div>
                      </div>
                      <span className="font-semibold text-gray">02 May</span>
                    </div>
                    <div className="inner">
                      <div className="snippet">
                        <p>
                          <strong>Handshake release assets</strong>
                          &nbsp;validation metrics first mover advantage
                          ownership prototype. Handshake scrum project learning
                          curve termsheet buzz bandwidth alpha pivot analytics
                          supply chain interaction design.&nbsp;
                          <mark>
                            Niche market deployment metrics venture customer
                            funding buyer handshake twitter stock
                          </mark>
                          .&nbsp;Pitch analytics assets.
                        </p>
                        <p>
                          Attending a trade show can be a very effective method
                          of promoting your company and its products. And one of
                          the most effective ways to optimize your trade show
                          display and increase traffic to your booth is through
                          the use of banner stands.{" "}
                        </p>
                        <figure>
                          <figcaption>
                            This is a caption on this photo for reference
                          </figcaption>
                        </figure>
                      </div>
                      <h3>Microsoft Patch Management For Home Users</h3>
                      <p>
                        Last month, my wife, Anne Doe, took me to Las Vegas
                        because she had to go for a business convention.
                        Needless to say, she writes for an guide to casinos and
                        I hate gambling. But then, she likes it and this
                        supports us too, so I went along without any hassle. At
                        first I was depressed, but then as I asked around and
                        looked around, I ended up having more fun in Las Vegas
                        than I would have thought. And no. I did not enter a
                        single casino while I was there.
                      </p>
                      <h4>Entertainment</h4>
                      <p>
                        One of the greatest things about Las Vegas, Reno and
                        Atlantic City (but especially Las Vegas) is the number
                        of shows that are available. You can get to watch top
                        class comedians like Jay Leno, Jerry Seinfeld, Ray
                        Romano, Tim Allen and even the likes of Bill Cosby and
                        Chris Rock. If you are into music you can watch female
                        singers like Celine Dion, Mariah Carey, Britney Spears,
                        Christina Aguilera and Beyonc?, male performers like
                        Phil Collins, Eric Clapton, Snoopy Dog and bands like
                        Oasis and Bon Jovi. I could go on and on but the list is
                        endless. If you are into magic you can watch magicians
                        like David Copperfield do their thing meters from you.
                        Whatever you like, you can find it here from Western
                        music to oldies to Jazz, Rock, Heavy Mettle to Trance.
                        All you have to do is look at the itenary offered during
                        your visit.
                      </p>
                      <h4>Food</h4>
                      <p>
                        Chinese to Japanese to Korean to Jewish and even
                        Vegetarian and proper meat eating establishments await
                        your every delight in Vegas. Do not opt for the cheap
                        and oily fried dishes served for free while you play.
                        Stop a while and take in the delightful scenery and
                        smells of East Asian or European dishes. What is
                        wondrous is that you get to see man’s ability to mix. A
                        real melting pot if I may say so myself.
                      </p>
                      <p>
                        But is that all what casino cities like Las Vegas are
                        about? Do you have to remain in the city to really and
                        truly enjoy your stay? No.
                      </p>
                      <p>
                        While looking at the Dam and Canyon is from above, to
                        see the true beauty of the river, you have to go down.
                        The Colorado river is excellent for river-rafting and
                        water sports, but you do not have to take part if it is
                        not your thing. Instead just sit back and enjoy another
                        of nature’s marvels.
                      </p>
                      <h4>Bonnie Springs</h4>
                      <p>
                        Who can not resist going to one of the old towns like
                        those in the Western gun slinging movies? Your
                        destination needs to be Old Nevada. There you can
                        delight in an old western town right in the middle of
                        Red Rock Canyon. They host western shootouts too so come
                        prepared, partner! I could go on and on about other
                        attractions like the theme park in Circus Circus, the
                        Gilcrease Nature Sanctuary, the Henderson Bird Viewing
                        Preserve and Mt. Charleston but I think you get the
                        picture. In Las Vegas and hate gambling? Do not despair.
                        Just go out and have some clean un-gambling fun.
                      </p>
                    </div>
                  </div>
                  <h4 className="h3 mb-30">Comment </h4>
                  <div className="comments_article">
                    <ul className="article-comments mb-4 mb-sm-5">
                      <li>
                        <div className="comment">
                          <div
                            className="d-flex justify-content-between
			                                        align-items-center mb-3"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src={AvatarImage2}
                                alt="Daniel Smith"
                                className="avatar avatar-sm"
                              />
                              <div className="h6 mb-0 ml-2">Daniel Smith</div>
                            </div>
                            <div className="text-small text-muted">
                              14 minutes ago
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Dolor sit amet, consectetur adipiscing elit.
                              Phasellus feugiat elit vitae enim lacinia semper.
                              Cras nulla lectus, porttitor vitae urna iaculis,
                              Melisandre tincidunt lectus. Brienne nec tellus
                              sit amet massa auctor imperdiet imp vitae diam.
                            </p>
                            <a >Reply</a>
                          </div>
                        </div>
                        <ul className="article-comments is_child">
                          <li>
                            <div className="comment">
                              <div
                                className="d-flex
			                                                justify-content-between
			                                                align-items-center mb-3"
                              >
                                <div
                                  className="d-flex
			                                                    align-items-center"
                                >
                                  <img
                                    src={AvatarImage11}
                                    alt="Daniel Smith"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                  <div className="h6 mb-0 ml-2">
                                    Daniel Smith
                                  </div>
                                </div>
                                <div
                                  className="text-small
			                                                    text-muted"
                                >
                                  14 minutes ago
                                </div>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Dolor sit amet, consectetur adipiscing elit.
                                  Phasellus feugiat elit vitae enim lacinia
                                  semper. Cras nulla lectus, porttitor vitae
                                  urna iaculis, Melisandre tincidunt lectus.
                                  Brienne nec tellus sit amet massa auctor
                                  imperdiet imp vitae diam.
                                </p>
                                <a >Reply</a>
                              </div>
                            </div>
                            <ul className="article-comments is_child">
                              <li>
                                <div className="comment">
                                  <div
                                    className="d-flex
			                                                        justify-content-between
			                                                        align-items-center
			                                                        mb-3"
                                  >
                                    <div
                                      className="d-flex
			                                                            align-items-center"
                                    >
                                      <img
                                        src={AvatarImage3}
                                        alt="Daniel
			                                                                Smith"
                                        className="avatar
			                                                                avatar-sm"
                                      />
                                      <div
                                        className="h6 mb-0
			                                                                ml-2"
                                      >
                                        Daniel Smith
                                      </div>
                                    </div>
                                    <div
                                      className="text-small
			                                                            text-muted"
                                    >
                                      14 minutes ago
                                    </div>
                                  </div>
                                  <div className="comment-content">
                                    <p>
                                      Dolor sit amet, consectetur adipiscing
                                      elit. Phasellus feugiat elit vitae enim
                                      lacinia semper. Cras nulla lectus,
                                      porttitor vitae urna iaculis, Melisandre
                                      tincidunt lectus. Brienne nec tellus sit
                                      amet massa auctor imperdiet imp vitae
                                      diam.
                                    </p>
                                    <a >Reply</a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div
                            className="d-flex justify-content-between
			                                        align-items-center mb-3"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src={AvatarImage4}
                                alt="Daniel Smith"
                                className="avatar avatar-sm"
                              />
                              <div className="h6 mb-0 ml-2">Daniel Smith</div>
                            </div>
                            <div className="text-small text-muted">
                              14 minutes ago
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Dolor sit amet, consectetur adipiscing elit.
                              Phasellus feugiat elit vitae enim lacinia semper.
                              Cras nulla lectus, porttitor vitae urna iaculis,
                              Melisandre tincidunt lectus. Brienne nec tellus
                              sit amet massa auctor imperdiet imp vitae diam.
                            </p>
                            <a >Reply</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h4 className="h3 mb-30">Leave a reply</h4>
                  <div className="reply">
                    <form>
                      <div className="form-row">
                        <div className="col-sm">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="reply-name"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="reply-email"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="reply-message"
                          rows={8}
                          className="form-control"
                          placeholder="Your Reply"
                          defaultValue={""}
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <a
                          
                          className="btn btn-primary sweep_letter
			                                    sweep_top"
                        >
                          <div className="inside_item">
                            <span data-hover="Reply"> Reply </span>
                          </div>
                        </a>
                      </div>
                    </form>
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
                  <h3 className="widget-title text-dark">Recent Articles</h3>
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
                                    Review Of Photoshop CC Editing Techniques{" "}
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
                                <img src={Post3Image} alt="" />
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
                                <img src={Post4Image} alt="" />
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
                                <img src={Post4Image} alt="" />
                              </a>
                              <div className="info">
                                <h4 className="title">
                                  <a >
                                    {" "}
                                    Review Of Healthy Breakfast Meals For Energy
                                    Boost
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
                                    Review Of Healthy Breakfast Meals For Energy
                                    Boost
                                  </a>
                                </h4>
                                <div className="time"> may 25, 2021</div>
                              </div>
                            </article>
                            {/* Slides */}
                            <article className="item">
                              <a  className="thumb hover-effect">
                                <img src={Post6Image} alt="" />
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
                    Don’t miss our newest business blog posts. Sign up for the
                    newsletter!
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
                        <span data-hover="Join with us!"> Join with us! </span>
                      </div>
                    </a>
                  </div>
                </div>
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
                <div className="widget">
                  <h3 className="widget-title">Tags</h3>
                  <div className="widget-wrap">
                    <div className="tag_cloud">
                      <a>
                        NFT
                      </a>
                      <a>
                        Raroin
                      </a>
                      <a>
                        btc
                      </a>
                      <a>
                        crypto
                      </a>
                      <a>
                        bankrupt
                      </a>
                      <a>
                        advantages
                      </a>
                      <a>
                        mint
                      </a>
                      <a>
                        creabik
                      </a>
                      <a>
                        design
                      </a>
                      <a>
                        design
                      </a>
                      <a>
                        envato
                      </a>
                      <a>
                        analytics
                      </a>
                      <a>
                        ceo
                      </a>
                      <a>
                        great
                      </a>
                      <a>
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
      <Footer />
    </>
  );
};
