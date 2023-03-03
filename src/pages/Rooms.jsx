import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Hero/Banner';
import RoomContainer from '../components/Rooms/RoomContainer';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div>
      <Hero hero='roomsHero'>
        <Banner title="Our Rooms">
          <Link to="/" className='links-to'>Return Home</Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </div>
  )
}

export default Rooms;