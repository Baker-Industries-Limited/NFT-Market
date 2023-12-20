"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "./app.scss";
import "./bem/header.css";
import "./bem/footer.css";
import "./bem/home.css";
import "./bem/mint.css";
import "./bem/rm.css";
import "./bem/contact.css";
import "./bem/fauset.css";
import "./bem/faq.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, publicClient } = configureChains(
    [bscTestnet],
    [alchemyProvider({ apiKey: "" }), publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "2b59a50447305d116602bfcbc02b5bd6",
    chains,
  });
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
