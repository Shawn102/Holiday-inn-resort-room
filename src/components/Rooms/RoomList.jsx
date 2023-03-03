import React from "react";
import filterGear from "../../images/gif/loading-gear.gif";
import RoomCard from "../RoomCard";

const RoomList = ({ room }) => {
  if (room.length === 0) {
    return (
      <div className="loading">
        <h1>No rooms matches to your search</h1>
        <img src={filterGear} alt="" />
      </div>
    );
  }
  return (
    <div>
      <section className="featued-section">
        {room.map((rooms) => (
          <RoomCard key={rooms.id} rooms={rooms} />
        ))}
      </section>
    </div>
  );
};

export default RoomList;
