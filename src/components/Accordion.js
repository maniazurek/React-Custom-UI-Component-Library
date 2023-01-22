import React from "react";
import styled from "styled-components";

const Accordion = () => {
  return (
    <SectionContainer>
      <SectionTitle>Accordion</SectionTitle>
      <SectionDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </SectionDescription>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: calc(100vh - 240px);
  margin-left: 240px;
  padding: 57.2px 0px 57.2px 57.2px;
`;

const SectionTitle = styled.p`
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 33.2px;
`;

const SectionDescription = styled.p`
font-size: 13px;
margin: 0px;`

export default Accordion;
