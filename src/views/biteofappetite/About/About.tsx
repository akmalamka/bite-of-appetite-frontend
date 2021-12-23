import React from 'react';
import Main from 'layouts/Main';
import ImageWithDescription from 'blocks/ImageWithDescription';

const About = (): JSX.Element => {
  return (
    <Main colorInvert={false}>
      <ImageWithDescription video={false} />
    </Main>
  );
};

export default About;