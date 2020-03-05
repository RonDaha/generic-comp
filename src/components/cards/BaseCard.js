import React from 'react';

export const BaseCard = ({ content, stlyeClasses }) => {
  return (
    <div className={'base-card-container ' + stlyeClasses}>
      {content}
    </div>
  )
}