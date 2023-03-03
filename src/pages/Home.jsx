import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Hero/Banner";
import Services from "../components/Home/Services";
import Featured from "../components/Home/Featured";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Hero hero="defaultHero">
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting At $299"
        >
          <Link to="/rooms" className="links-to">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Featured />
    </div>
  );
};

export default Home;
