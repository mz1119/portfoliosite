import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There! <br />
        Welcome to Max's Portfolio!
      </SectionTitle>
      <SectionText>
        I am a CS Major at Columbia University currently interested in working on full stack web development as well as maching learning projects
      </SectionText>
      <Button onClick={()=>window.location="#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;