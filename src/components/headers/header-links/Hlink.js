import React from 'react';

export const Hlink = ({handleClick, content}) => {
  return (
    <div onClick={handleClick} className="hlink pointer center-border-hover transition">
      {content}
    </div>
  )
}