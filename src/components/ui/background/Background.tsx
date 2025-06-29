import { lazy, Suspense } from 'react';
import Stars from './space/Stars.tsx';
const MeteorShower = window.innerWidth > 800 ? lazy(() => import('./space/MeteorShower.tsx')) : null;
const Aurora = window.innerWidth > 800 ? lazy(() => import('./Aurora.tsx')) : null;

function Background() {
  return (
    <>
        <div
          id="starsContainer"
          className="fixed inset-0 -z-10 w-screen h-screen lg:h-screen overflow-hidden"
        >
          <Stars />
          {MeteorShower && Aurora &&
            <Suspense>
              <MeteorShower />
              <Aurora />
            </Suspense>
          }
        </div>
    </>
  )
}

export default Background;
