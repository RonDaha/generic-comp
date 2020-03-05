import React from 'react';

export const TripleSidesRow = ({ sideA, sideB, sideC, styleClassesA, styleClassesB, styleClassesC}) => {
  return (
    <div className="triple-sides-row-container">
      <div className={'side side-a ' + styleClassesA}>{sideA}</div>
      <div className={'side side-b ' + styleClassesB}>{sideB}</div>
      <div className={'side side-C ' + styleClassesC}>{sideC}</div>
    </div>
  );
}