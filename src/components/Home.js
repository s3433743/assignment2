import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">New</span> Welcome to our App! Fully Hosted within the AWS enviornment!
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
