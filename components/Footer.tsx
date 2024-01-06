import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="foot">
      <div className="footer">
        <div>
          <Link href="/">
            <img className="lg" src="./images/lg.svg" alt="logo" />
          </Link>

          {/*  <div className="social-footer">
            <img src="./images/telegram.svg" alt="telegram" />
            <img src="./images/instagram.svg" alt="instagram" />
            <img src="./images/twitter.svg" alt="twitter" />
          </div> */}
          {/*  <div className="footer_text1">
            {" "}
            &copy; 2023 Baker Industries Limited. All rights Reserved
          </div> */}
        </div>
        <div className="footer-inner">
          <div>
            <Link href="/">
              <div className={`${inter.className} footer_text2`}>Home</div>
            </Link>
            <Link href="/mint">
              <div className={`${inter.className} footer_text2`}>Mint</div>
            </Link>
            <Link href="/collections">
              <div className={`${inter.className} footer_text2`}>
                Collections
              </div>
            </Link>
          </div>
          <div>
            <div className={`${inter.className} footer_text2`}>Whitepaper</div>
            <Link href="/roadmap">
              <div className={`${inter.className} footer_text2`}>Roadmap</div>
            </Link>
            <Link href="/contact">
              <div className={`${inter.className} footer_text2`}>
                Contact us
              </div>
            </Link>
          </div>
          <div className={`${inter.className} footer_text11`}>
            {" "}
            &copy; 2023 Baker Industries Limited. All rights Reserved
          </div>

          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="up"
            src="./images/up.svg"
            alt="up"
          />
        </div>
      </div>
    </div>
  );
}
