import React, { useEffect, useState } from "react";
import SectionContainer from "../styled-components-website/SectionContainer";
import SectionTitle from "../styled-components-website/SectionTitle";
import SectionDescription from "../styled-components-website/SectionDescription";

import SelectedOption from "./SelectedOption";

const SelectBox = ({ optionsToSelect, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState({ name: "", id: "" });
  const [selectedOptionDraft, setSelectedOptionDraft] = useState({
    name: "",
    id: "",
  });
  const [selectedOptionSubbmited, setSelectedOptionSubbmited] = useState({});
  const [areOptionsOpen, setAreOptionsOpen] = useState(false);

  useEffect(() => {
    const onWindowClick = () => setAreOptionsOpen(false);
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  }, []);

  const onOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedOptionDraft(option);
    setSelectedOptionSubbmited(option);
  };

  const onOptionDelete = () => {
    setSelectedOption({ name: "", id: "" });
    setSelectedOptionDraft({ name: "", id: "" });
    setSelectedOptionSubbmited({});
  };

  const onOptionDraftEdit = (event) => {
    const optionEdited = { ...selectedOption, name: event.target.value };
    setSelectedOptionDraft(optionEdited);
  };

  const onOptionSubmit = (event) => {
    if (event.key === "Enter") {
      const matchingOption = optionsToSelect.find((option) => {
        option.name === selectedOptionDraft.name;
        setAreOptionsOpen(false);
      });
      if (matchingOption) {
        setSelectedOption(selectedOptionDraft);
        setAreOptionsOpen(false);
      } else {
        setSelectedOptionDraft(selectedOption);
        setSelectedOptionSubbmited(selectedOption);
      }
    }
  };

  const onOptionsOpen = (event) => {
    event.stopPropagation();
    setAreOptionsOpen(true);
  };

  return (
    <SectionContainer>
      <SectionTitle>Select Box</SectionTitle>
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
      <div style={{ height: "100vh" }}>
        <div className="header__container">
          <div className="choose__container">
            <div className="container">
              <div className="option_container">
                <div className="option__selected">
                  <input
                    className="option__selected-input"
                    value={selectedOptionDraft.name}
                    placeholder={placeholder}
                    onChange={onOptionDraftEdit}
                    onKeyUp={onOptionSubmit}
                    onClick={onOptionsOpen}
                  />
                  {selectedOption.name && (
                    <span className="option__delete" onClick={onOptionDelete}>
                      &#10005;
                    </span>
                  )}
                </div>
                {areOptionsOpen && (
                  <ul className="option__list">
                    {optionsToSelect
                      .filter((option) =>
                        option.name
                          .toLowerCase()
                          .includes(selectedOptionDraft.name.toLowerCase())
                      )
                      .map((option) => (
                        <li
                          className="option__list-element"
                          key={option.id}
                          onClick={() => onOptionSelect(option)}
                        >
                          {option.name}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <SelectedOption
          selectedOptionDraft={selectedOptionDraft}
          selectedOptionSubbmited={selectedOptionSubbmited}
        />
      </div>
    </SectionContainer>
  );
};

export default SelectBox;

{
  /* <SectionContainer>
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
</SectionContainer> */
}
