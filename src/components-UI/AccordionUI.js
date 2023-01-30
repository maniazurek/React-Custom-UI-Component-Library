import React, { useState } from "react";
import styled from "styled-components";
import accordionData from "../utils/accordionData";
import AccordionItem from "./AccordionItem";

const AccordionUI = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [areOpen, setAreOpen] = useState([]);

  const onAccordionSingleToggle = (index) => {
    if (isOpen === index) {
      return setIsOpen(false);
    }
    setIsOpen(index);
  };

  const onAccordionManyToggle = (index) => {
    if (areOpen.includes(index)) {
      setAreOpen(areOpen.filter((item) => item !== index));
    } else {
      setAreOpen([...areOpen, index]);
    }
  };

  const onAccordionToggle = (index) => {
    if (show === "many") {
      onAccordionManyToggle(index);
    } else if (show === "single") {
      onAccordionSingleToggle(index);
    }
  };

  const determineOpenIcon = (index) => {
    if (show === "many") {
      if (areOpen.includes(index)) {
        return "fa-solid fa-chevron-up fa-2xs";
      } else {
        return "fa-solid fa-chevron-down fa-2xs";
      }
    } else if (show === "single") {
      if (isOpen === index) {
        return "fa-solid fa-chevron-up fa-2xs";
      } else {
        return "fa-solid fa-chevron-down fa-2xs";
      }
    }
  };

  const determineOpen = (index, accordion) => {
    if (show === "many") {
      if (areOpen.includes(index)) {
        return (
          <AccordionDescriptionOpen>
            {accordion.description}
          </AccordionDescriptionOpen>
        );
      } else {
        return null;
      }
    } else if (show === "single") {
      if (isOpen === index) {
        return (
          <AccordionDescriptionOpen>
            {accordion.description}
          </AccordionDescriptionOpen>
        );
      } else {
        return null;
      }
    }
  };

  return (
    <div>
      {accordionData.map((accordion, index) => (
        <div>
          {!accordion.disabled ? (
            <AccordionTitle
              disabled="false"
              onClick={() => onAccordionToggle(index)}
            >
              <div>{accordion.title}</div>
              <span className={determineOpenIcon(index)} />
            </AccordionTitle>
          ) : (
            <AccordionTitle disabled="true">{accordion.title}</AccordionTitle>
          )}
          {determineOpen(index, accordion)}
        </div>
        // <AccordionItem
        //   key={accordion.id}
        //   title={accordion.title}
        //   description={accordion.description}
        //   disabled={accordion.disabled}
        //   show="many"
        // />
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

// disabled do zmiany 
// zmiene trzymane w stringach
// tryb horyzontalny
//


export default AccordionUI;
