import React from "react";

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div className="underline"></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
