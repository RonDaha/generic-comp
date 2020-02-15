import React from 'react';


export const ThreeStepsCard = () => {
  return (
    <div className="three-steps-card-container base-shadow">
      <div className="step one">Step One</div>
      <div className="step two">Step Tw asdasd kdksdp ksddp kspp spdk psdkd psakdpas psdksdpa kdpaksdo</div>
      <div className="step three">Step Three</div>
    </div>
  );
}

export const CardsContainer = () => {
  return (
    <div className="cards-container">
      <ThreeStepsCard/>
      <ThreeStepsCard/>
      <ThreeStepsCard/>
      <ThreeStepsCard/>
    </div>
  );
}