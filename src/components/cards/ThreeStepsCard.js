import React from 'react';

export const ThreeStepsCard = ({ cardSteps, stlyeClasses }) => {

  const steps = cardSteps.map( cardStep => {
  return <div key={cardStep.id} className="step">{cardStep.step}</div>
  })

  return (
    <div className={'three-steps-card-container ' + stlyeClasses}>
      {steps}
    </div>
  );
}