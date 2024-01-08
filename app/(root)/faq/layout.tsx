import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAKERSERVE | FAQ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <body>{children}</body>;
}
