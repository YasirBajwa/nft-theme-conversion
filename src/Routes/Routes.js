import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404 } from "../components/404";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Home } from "../components";
import { Activity } from "../components/Activity";
import { Article } from "../components/Article";

import { Blog } from "../components/blog";
import { Collection } from "../components/collection";
import { ConnectWallet } from "../components/connect";
import { ContactPage } from "../components/contact";
import { EditProfile } from "../components/editProfile";
import { ForumPage } from "../components/forum";
import { ItemDetail } from "../components/itemDetail";
import { KitPage } from "../components/kit";
import { LiveAuction } from "../components/liveAuction";
import { LoginPage } from "../components/login";
import { RegisterPage } from "../components/regsiter";
import { PrivacyPolicy } from "../components/privacy";
import { MarketPlace } from "../components/market";
import { Creators } from "../components/creators";
import { Upcoming } from "../components/upcoming";
import { Upload } from "../components/upload";
import { UploadType } from "../components/uploadTypes";

const RoutePage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/article" element={<Article />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/item-detail" element={<ItemDetail />} />
          <Route path="/kit" element={<KitPage />} />
          <Route path="/live-auction" element={<LiveAuction />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/market" element={<MarketPlace />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/upcoming-projects" element={<Upcoming />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload-type" element={<UploadType />} />



          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutePage;
