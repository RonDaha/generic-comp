import React from 'react';
import { MultiCard } from './MultiCard';
import { FadeCard } from './FadeCard';
import { ThreeStepsCard } from './ThreeStepsCard';
import { BaseBtn } from '../buttons/BaseBtn';




export const CardsContainer = () => {
  return (
    <div className="cards-container">
      <FadeCard
        styleClasses="pointer"
        handleClick={() => { console.log('Clicked!') }}
        date={{ day: '04', month: 'MAR' }}
        title="This is the one and only Title"
        content="This is the content! bla bla bla bla bla bla bla bla bla bla" />
      <MultiCard
        imgElement={<img src="https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2691&q=80" alt="images"></img>}
        title="Card Title"
        subTitle="Card SubTitle"
        styleClasses="base-shadow pointer"
        handleClick={() => { console.log('Clicked!') }}
      />
      <ThreeStepsCard 
        stlyeClasses="base-shadow"
        cardSteps={[{id: 1, step: 'Step One'}, {id: 2, step: 'Step Two'}, {id: 3, step: <BaseBtn content="Step Three" styleClasses="squreBtn transition"/>} ]}
      />
    </div>

    // <div className="cards-container">
    //   <ThreeStepsCard/>
    //   <ThreeStepsCard/>
    //   <ThreeStepsCard/>
    //   <ThreeStepsCard/>
    // </div>
  );
}