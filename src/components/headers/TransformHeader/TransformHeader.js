import React, { useRef, useState, useEffect } from 'react';

/* Get as Props 
1. Hlink Array
2. img element for the logo 
*/
export const TransformHeader = ({ imgElement, hlinkArray }) => {

  const [isPageTop, setIsPageTop] = useState(window.pageYOffset ? false : true);
  const headerRef = useRef(null); 
  useEffect( () => {
    window.onscroll = () => {
      if (window.pageYOffset < 5) {
        setIsPageTop(true)
        return;
      }
      setIsPageTop(false)
    }
  }, [])

  return (
    <div className={'header-container theader transition ' + (isPageTop ? 'on-top' : 'base-shadow')} ref={headerRef}>
      <div className="theader-logo pointer">
        {imgElement}
      </div>
      <div className="navbar-container">
        {hlinkArray}
      </div>
    </div>
  );
}