import React from 'react';
import { CenteredIntro } from './CenteredIntro';

export const CenteredIntroM = () => {

  const title = 'This is the title';
  const subTitle = 'We got here from props!';
  const btnComponent = 'Button Soon';

  return (
    <CenteredIntro title={title} subTitle={subTitle} btnComponent={btnComponent} />
  );
}