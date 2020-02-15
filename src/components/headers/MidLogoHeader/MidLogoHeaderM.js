import React from 'react';
import { useHistory } from 'react-router-dom';
import { MidLogoHeader } from './MidLogoHeader';
import { Icon } from '../../generic/Icon';

export const MidLogoHeaderM = () => {

  const history = useHistory();
  /* Logic comes here */
  const handleClick = (path) => {
    history.push(path)
  }

  const imgElement = (<img 
    alt="logo"
    onClick={handleClick.bind(this, '/')}
    src={require('../../../assets/images/TheDog.JPG')} />)

    const leftElement = [
      <Icon key="1" imgElement={<img alt="icon" src={require('../../../assets/icons/facebook.png')}/>} handleIconClick={() => console.log('eeee')} />,
      <Icon key="2" imgElement={<img alt="icon" src={require('../../../assets/icons/instagram.png')}/>} handleIconClick={() => console.log('aa')} />,
      <Icon key="3" imgElement={<img alt="icon" src={require('../../../assets/icons/linkedin.png')}/>} handleIconClick={() => console.log('sss')} />,
      <Icon key="4" imgElement={<img alt="icon" src={require('../../../assets/icons/twitter.png')}/>} handleIconClick={() => console.log('ddd')} />
    ]

  return (
    <MidLogoHeader leftElement={leftElement} imgElement={imgElement}/>
  );
}