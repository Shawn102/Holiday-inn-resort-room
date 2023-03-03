import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "../Loading";
import { MyGlobalProvider } from "../../Context";

const RoomContainer = () => {
  const { myRooms, mySortedRooms, loading } = MyGlobalProvider();
  if(loading) {
      return <Loading />
  }
  return (
    <div>
      <RoomFilter room={myRooms}/>
      <RoomList room={mySortedRooms}/>
    </div>
  );
};

export default RoomContainer;
