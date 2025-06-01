import React from 'react';
import Ufo from './space/Ufo.tsx';
import MeteorShower from './space/MeteorShower.tsx';
import Stars from './space/Stars.tsx';


function Background() {
  return (
    <>
        <div
          id="starsContainer"
          className="fixed inset-0 -z-10 w-screen h-full lg:h-screen overflow-hidden"
        >
          <Stars />
          <MeteorShower />
          <Ufo />
        </div>
    </>
  )
}

export default Background;
