/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function Contact() {
  return (
    <div className="full-bg">
      <Header />
      <main className="contact-main">
        <section className="form">
          <div className="contact-head">We would love to hear from you</div>

          <div className="form-box">
            <label className="label">Email Address</label>
            <input className="input" placeholder="Enter your email address" />
          </div>

          <div className="form-box">
            <label className="label">Write your message</label>
            <textarea className="tarea"></textarea>
          </div>

          <button className="contact-but">Send message</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
