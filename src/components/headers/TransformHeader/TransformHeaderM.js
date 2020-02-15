import React from 'react';
import { useHistory } from 'react-router-dom';
import { TransformHeader } from './TransformHeader';
import { Hlink } from '../header-links/Hlink';

export const TransformHeaderM = () => {

  const history = useHistory();
  /* Logic comes here */
  const handleClick = (path) => {
    history.push(path)
  }
  
  const imgElement = (<img 
      alt="logo"
      onClick={handleClick.bind(this, '/')}
      src={require('../../../assets/images/TheDog.JPG')} />)

  const hlinkArray = [
    <Hlink key="1" content="content 1" handleClick={handleClick.bind(this, '/a')} />,
    <Hlink key="2" content="content 2" handleClick={handleClick.bind(this, '/b')} />,
    <Hlink key="3" content="content 3" handleClick={handleClick.bind(this, '/c')} />,
    <Hlink key="4" content="content 4" handleClick={handleClick.bind(this, '/d')} />,
    <Hlink key="5" content="content 5" handleClick={handleClick.bind(this, '/e')} />,
    <Hlink key="6" content="content 6" handleClick={handleClick.bind(this, '/f')} />,
    <Hlink key="7" content="content 7" handleClick={handleClick.bind(this, '/g')} />,
    <Hlink key="8" content="content 8" handleClick={handleClick.bind(this, '/h')} />]

  return (
    <TransformHeader imgElement={imgElement} hlinkArray={hlinkArray} />
  );
}