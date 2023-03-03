import React from "react";
import Title from "../Title";
import RoomCard from "../RoomCard";
import { MyGlobalProvider } from "../../Context";

const Featured = () => {
  const { myFeaturedRooms } = MyGlobalProvider();
  return (
    <div>
      <Title title="Featured Rooms" />
      <section className="featued-section">
        {myFeaturedRooms.map((rooms) => {
          return <RoomCard key={rooms.id} rooms={rooms}/>;
        })}
      </section>
    </div>
  );
};

export default Featured;
