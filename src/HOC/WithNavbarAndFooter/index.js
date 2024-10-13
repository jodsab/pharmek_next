import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import NavbarDesktop from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";
import { WHATSAPP } from "@/core/whatsapp";

import "./styles.scss";

const WithNavbarAndFooter = ({ children }) => {
  return (
    <div className="withnavbarandfooter_container">
      <div className="withnavbarandfooter_content">
        <div className="navbar_container">
          <div className="mobile_menu">
            <NavbarMobile />
          </div>
          <div className="desktop_menu">
            <NavbarDesktop />
          </div>
        </div>
        <div className="children">{children}</div>
        <Footer />
      </div>
      <Link href={WHATSAPP} className="btn-wsp" target="_blank">
        <FaWhatsapp color="white" size={35} />
      </Link>
    </div>
  );
};

export default WithNavbarAndFooter;
