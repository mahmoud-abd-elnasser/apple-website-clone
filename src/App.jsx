import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import HowitWorks from "./components/HowitWorks";
import Model from "./components/Model";
import NavBar from "./components/NavBar";
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowitWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
