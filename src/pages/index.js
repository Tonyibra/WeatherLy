import Head from "next/head";
import Image from "next/image";
import React from "react";
import LandingPage from "../Components/Landing/LandingPage";

export default function Home() {
  React.useEffect(() => {
    localStorage.setItem("temp", "Celcius");
  }, []);

  return (
    <div>
      <Head>
        <title>Weatherly | Getting Weather info with 1 click</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </div>
  );
}
