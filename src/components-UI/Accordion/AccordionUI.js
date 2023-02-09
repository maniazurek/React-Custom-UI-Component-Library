import React, { useState } from "react";
import accordionData from "../../utils/accordionData";
import {
  AccordionTitle,
  AccordionDescription,
  AccordionContainer,
} from "../Accordion/AccordionStyles";

const AccordionUI = ({
  show,
  showContent,
  mainColor,
  disabledColor,
  contentColor,
}) => {
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
          <AccordionDescription
            animated={true}
            contentColor={contentColor}
            showContent={showContent}
          >
            {accordion.description}
          </AccordionDescription>
        );
      } else {
        return null;
      }
    } else if (show === "single") {
      if (isOpen === index) {
        return (
          <AccordionDescription
            animated={true}
            contentColor={contentColor}
            showContent={showContent}
          >
            {accordion.description}
          </AccordionDescription>
        );
      } else {
        return null;
      }
    }
  };

  return (
    <>
      {accordionData.map((accordion, index) => (
        <AccordionContainer key={accordion.id}>
          {!accordion.disabled ? (
            <AccordionTitle
              disabled={false}
              onClick={() => onAccordionToggle(index)}
              mainColor={mainColor}
              disabledColor={disabledColor}
              contentColor={contentColor}
            >
              <AccordionContainer>{accordion.title}</AccordionContainer>
              <AccordionContainer className={determineOpenIcon(index)} />
            </AccordionTitle>
          ) : (
            <AccordionTitle
              disabled={true}
              mainColor={mainColor}
              disabledColor={disabledColor}
              contentColor={contentColor}
            >
              {accordion.title}
            </AccordionTitle>
          )}
          {determineOpen(index, accordion)}
        </AccordionContainer>
      ))}
    </>
  );
};

export default AccordionUI;

// scroll na wysokość opisu

// zmiene trzymane w stringach
// tryb horyzontalny
