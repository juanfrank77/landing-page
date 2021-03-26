import React from "react";
import Section from "./Section";
import Link from "next/link";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link href="/">
            <a>
              <img src={props.logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="right copyright">{props.copyright}</div>
      </div>
    </Section>
  );
}

export default Footer;
