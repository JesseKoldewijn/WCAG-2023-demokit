import React from "react";

import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { api } from "@/utils/api";
import reportAccessibility from "@/utils/reportAccessibility";

const interFont = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "900"],
});

const App: AppType = ({ Component, pageProps }) => {
  return (
    <div role="main" className={`${interFont.className}`}>
      <Component {...pageProps} />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
reportAccessibility(React);

export default api.withTRPC(App);
