import React from 'react';

export const DoubleSidesRow = ({sideA, sideB, styleClassesA, styleClassesB}) => {
  return (
    <div className="double-sides-row-container">
      <div className={'side side-a ' + styleClassesA}>{sideA}</div>
      <div className={'side side-b ' + styleClassesB}>{sideB}</div>
    </div>
  );
}