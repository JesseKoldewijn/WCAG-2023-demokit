import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import reportAccessibility from "@/utils/reportAccessibility";
import React from "react";

import { Inter } from "next/font/google";

const interFont = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "900"],
});

const App: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${interFont.className}`}>
      <Component {...pageProps} />
    </main>
  );
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
reportAccessibility(React);

export default api.withTRPC(App);
