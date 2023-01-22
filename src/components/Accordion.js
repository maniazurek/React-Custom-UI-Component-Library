import React from "react";
import styled from "styled-components";

const Accordion = () => {
  return (
    <SectionContainer>
      <div>Accordion</div>
    </SectionContainer>
  );

};

const SectionContainer = styled.div`
width: calc(100vh - 240px);
margin-left: 240px;
`;

export default Accordion;
