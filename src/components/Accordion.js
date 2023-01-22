import React from "react";
import SectionContainer from "../styled-components/SectionContainer";
import SectionTitle from "../styled-components/SectionTitle";
import SectionDescription from "../styled-components/SectionDescription";

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

export default Accordion;
