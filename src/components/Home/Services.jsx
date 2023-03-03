import React from "react";
import Title from "../Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Loading from "../Loading";
import AutoType from "./AutoType";
import { MyGlobalProvider } from "../../Context";

const iconData = [
  {
    icon: <FaCocktail />,
    title: "free Cocktails",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae!",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae!",
  },
  {
    icon: <FaShuttleVan />,
    title: "Freee Shuttle",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae!",
  },
  {
    icon: <FaBeer />,
    title: "strongest Beer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae!",
  },
];

const Services = () => {
  const { loading } = MyGlobalProvider();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="services">
      <div className="service-h4">
        <h4>Jokes of The Day <br />
        <AutoType />
        </h4> 
      </div>
      <Title title="Services" />
      <div className="services-center">
        {iconData.map((item, index) => {
          const { icon, title, info } = item;
          return (
            <article key={index} className="article-service">
              <h2>{icon}</h2>
              <h4>{title}</h4>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
