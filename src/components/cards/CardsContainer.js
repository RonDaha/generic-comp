import React from 'react';
import { MultiCard } from './MultiCard';
import { FadeCard } from './FadeCard';


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
    <FadeCard
      styleClasses="pointer"
      handleClick={() => {console.log('Clicked!')}}
      date={{day: '04', month: 'MAR'}}
      title="This is the one and only Title"
      content="This is the content! bla bla bla bla bla bla bla bla bla bla"/>
    // <MultiCard 
    //   imgElement={<img src="https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2691&q=80" alt="images"></img>}
    //   title="Card Title"
    //   subTitle="Card SubTitle"
    //   styleClasses="base-shadow pointer"
    //   handleClick={() => {console.log('Clicked!')}}
    //   />
    // <div className="cards-container">
    //   <ThreeStepsCard/>
    //   <ThreeStepsCard/>
    //   <ThreeStepsCard/>
    //   <ThreeStepsCard/>
    // </div>
  );
}