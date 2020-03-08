import React from 'react';
import { useTrail, animated } from 'react-spring'

export const Strail = ({ parentRef, items, toggle, containerClass, addConfig = {}, stepsHieght = 40, stepsX = 20 }) => {

  const config = { mass: 5, tension: 2000, friction: 200, ...addConfig }
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? stepsX : 50,
    height: toggle ? stepsHieght : 0,
    from: { opacity: 0, x: stepsX, height: 0 },
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