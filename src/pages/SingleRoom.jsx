import React from "react";
import { useParams, Link } from "react-router-dom";
import { StyledHero } from "../components/Hero/StyledHero";
import Title from "../components/Title";
import Loading from "../components/Loading";
import Banner from "../components/Hero/Banner";
import { MyGlobalProvider } from "../Context";

const SingleRoom = () => {
  const { slug } = useParams();
  console.log(slug);
  const { singleRoom, loading } = MyGlobalProvider();
  const rooms = singleRoom(slug);
  console.log(rooms);
  if (loading) {
    return <Loading />;
  }
  if (rooms.length === 0) {
    return (
      <StyledHero>
        <Banner title="No Data found">
          <Link to="/" className="links-to">
            Return Home
          </Link>
        </Banner>
      </StyledHero>
    );
  }
  const {
    name,
    breakfast,
    capacity,
    description,
    extras,
    images,
    pets,
    price,
    size,
  } = rooms[0];
  const [bcgImage, ...restOfTheImage] = images;
  return (
    <div>
      <StyledHero img={bcgImage}>
        <Banner title={`${name} room`}>
          <Link to="/" className="links-to">
            Return Home
          </Link>
        </Banner>
      </StyledHero>
      <Title title="Room Images" />
      <section className="single-room">
        <div className="single-room-images">
          {restOfTheImage.map((image, index) => {
            return <img key={index} src={image} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size}</h6>
            <h6>
              max capacity:
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}> - {item}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default SingleRoom;
