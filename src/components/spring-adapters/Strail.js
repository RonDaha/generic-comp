import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring'

export const Strail = ({ parentRef, items, toggle, containerClass }) => {

  const config = { mass: 5, tension: 2000, friction: 200 }
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className={containerClass} ref={parentRef}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index].key}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}