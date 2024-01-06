/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export default function Sidebar({ toggle }) {
  return (
    <div className={toggle ? "sidebar animation1" : "sidebar animation2"}>
      <Link className="atag" href="/mint">
        <div className={`${michroma.className} side-item`}>Mint NFT</div>
      </Link>
      <Link className="atag" href="/collections">
        <div className={`${michroma.className} side-item`}>Collections</div>
      </Link>
      <Link className="atag" href="/resell">
        <div className={`${michroma.className} side-item`}>Resell</div>
      </Link>
      <Link className="atag" href="/faq">
        <div className={`${michroma.className} side-item`}>FAQ</div>
      </Link>
      <Link className="atag" href="/contact">
        <div className={`${michroma.className} side-item`}>Contact us</div>
      </Link>
      <div className={`${michroma.className} side-item`}>Whitepaper</div>
      <Link className="atag" href="/roadmap">
        <div className={`${michroma.className} side-item`}>Roadmap</div>
      </Link>
      <div className="">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        className="btn3"
                        onClick={openConnectModal}
                        type="button"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported || chain.id !== 97) {
                    return (
                      <button
                        className="btn3"
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network - {chain.name}
                      </button>
                    );
                  }

                  return (
                    <div>
                      <button
                        className="btn3"
                        onClick={openAccountModal}
                        type="button"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  );
}
