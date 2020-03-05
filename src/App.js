import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MidLogoHeaderM } from './components/headers/MidLogoHeader/MidLogoHeaderM';
// import { TransformHeaderM } from './components/headers/TransformHeader/TransformHeaderM';
import { CenteredIntroM } from './components/intros/CenteredIntro/CenteredIntroM';
import { WindowsIntroM } from './components/intros/WindowsIntro/WindowsIntroM';
import { TitleA } from './components/titles/TitleA';
import { CardsContainer } from './components/cards/CardsContainer';
import { DoubleSidesRow } from './components/rows/DoubleSidesRow';
import { TripleSidesRow } from './components/rows/TripleSidesRow';

function App() {
  return (
    <Router>
      <div className="app-container">
        <MidLogoHeaderM />
        <WindowsIntroM />
        <TitleA titleContent="Cards" />
        <CardsContainer />
        <TitleA titleContent="Rows" />
        <DoubleSidesRow 
          sideA="This is the side A content!"
          sideB={(<img alt="im" src={require('./assets/images/demo-trans.jpg')}></img>)} />
        <DoubleSidesRow 
          sideA={(<img alt="im" src={require('./assets/images/demo-trans2.jpg')}></img>)}
          sideB="This is the side B content!" />
        <TripleSidesRow sideA="Side A content!" sideB="Side B content!" sideC="Side C content!" />
        <TitleA titleContent="Buttons" />
        <TitleA titleContent="Spring" />
      </div>
    </Router>

  );
}

export default App;
