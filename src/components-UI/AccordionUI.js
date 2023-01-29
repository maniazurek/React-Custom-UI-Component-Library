import React, { useState } from "react";
import styled from "styled-components";
import accordionData from "../utils/accordionData";

const AccordionUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(accordionData);

  const onAccordionToggle = (event) => {
    if (isOpen === event) {
      return setIsOpen(false);
    }
    setIsOpen(event);
  };

  return (
    <div>
      {data.map((accordion, event) => (
        <div>
          {!accordion.disabled ? (
            <AccordionTitle
              disabled="false"
              onClick={() => onAccordionToggle(event)}
            >
              <div>{accordion.title}</div>
              <span
                className={
                  isOpen === event
                    ? "fa-solid fa-chevron-up fa-2xs"
                    : "fa-solid fa-chevron-down fa-2xs"
                }
              ></span>
            </AccordionTitle>
          ) : (
            <AccordionTitle disabled="true">{accordion.title}</AccordionTitle>
          )}
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
  border-radius: 4px;
  padding: 8px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 7px;
  margin-bottom: 7px;
  color: #fff;
  background-color: ${({ disabled }) =>
    disabled === "false" ? "#8fb593" : "#d8d8d8"};
  border: ${({ disabled }) =>
    disabled === "false" ? "1px solid #8fb593" : "1px solid #d8d8d8"};
`;

const AccordionDescriptionOpen = styled.div`
  font-size: 12px;
  border: 1px solid #8fb593;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
`;

export default AccordionUI;
