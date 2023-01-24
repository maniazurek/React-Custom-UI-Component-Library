import React, { useState } from "react";
import styled from "styled-components";

const AccordionUI = ({ accordionData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onAccordionToggle = (event) => {
    if (isOpen === event) {
      return setIsOpen(false);
    }
    setIsOpen(event);
  };

  return (
    <div>
      {accordionData.map((accordion, event) => (
        <div>
          <AccordionTitle onClick={() => onAccordionToggle(event)}>
            <div>{accordion.title}</div>
            <span>{isOpen === event ? "-" : "+"}</span>
          </AccordionTitle>
          {isOpen === event && (
            <AccordionDescriptionOpen>
              {accordion.description}
            </AccordionDescriptionOpen>
          )}
        </div>
      ))}
    </div>
  );
};

const AccordionTitle = styled.div`
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const AccordionDescriptionOpen = styled.div`
  font-size: 12px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
`;

export default AccordionUI;
