import { Fragment } from "react";
import About from "../components/About";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Nav />
      <About />
      <Hero />
      <Team />
      <Contact />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
