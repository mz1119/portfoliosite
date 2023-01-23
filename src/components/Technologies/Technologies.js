import React from 'react';
import { DiFirebase, DiReact} from 'react-icons/di';
import { GiBrain} from 'react-icons/gi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>
        Technologies
      </SectionTitle>
      <SectionText>
        I've worked with a wide range of technologies over my coding journey, here is a list of the ones I am most proficient in. Just know that I am constantly working to learn more and expand this list!
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="4rem"/>
          <ListContainer>
            <ListTitle>Front End</ListTitle>
            <ListParagraph>
              Expirience with: <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="4rem" />
          <ListContainer>
            <ListTitle>Back End</ListTitle>
            <ListParagraph>
              Expirience with: <br />
              Node.js and mySQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <GiBrain size="4rem" />
          <ListContainer>
            <ListTitle>Machine Learning</ListTitle>
            <ListParagraph>
              Expirience with: <br />
              PyTorch and TensorFlow
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
