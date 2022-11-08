<<<<<<< HEAD
import React from 'react'
import ContactBanner from '../footer/ContactBanner'

export default function Home() {
  return (
    <div>
        <ContactBanner />
    </div>
  )
}
=======
import React from "react";
import Categories from "./Category";
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;
>>>>>>> 14b054150e1aea6787a84befda388d16d0f181ce
