import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Hero/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title="404" subtitle="Page Not found :(">
          <Link to="/" className='links-to'>Return Home</Link>
        </Banner>
      </Hero>
    </div>
  )
}

export default Error;