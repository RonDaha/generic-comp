import React from 'react';

// TODO - change to icon as font
export const Icon = ({ imgElement, handleIconClick, clickable = true }) => {
  return (
    <div className={'icon-container ' + (clickable ? 'pointer' : '')} onClick={handleIconClick}>
      {imgElement}
    </div>
  );
}
