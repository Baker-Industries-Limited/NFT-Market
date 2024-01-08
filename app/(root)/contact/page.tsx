/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Inter, Raleway, Michroma } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const rale = Raleway({
  subsets: ["latin"],
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  return (
    <div className="full-bg">
      <Header />
      <main className="contact-main">
        <section className="form">
          <div className={`${inter.className} contact-head`}>
            We would love to hear from you
          </div>

          <div className="form-box">
            <label className={`${inter.className} label`}>Email Address</label>
            <input
              className={`${rale.className} input`}
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-box">
            <label className={`${inter.className} label`}>
              Write your message
            </label>
            <textarea className={`${rale.className} tarea`}></textarea>
          </div>

          <button className={`${inter.className} contact-but`}>
            Send message
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
