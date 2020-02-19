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
        <DoubleSidesRow />
        <TripleSidesRow />
        <TitleA titleContent="Buttons" />
      </div>
    </Router>

  );
}

export default App;
