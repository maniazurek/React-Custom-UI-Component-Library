import React, { useEffect, useState } from "react";
import {
  SelectContainer,
  SelectInput,
  SelectList,
  SelectListElement,
} from "./SelectBoxStyles";
import selectBoxData from "../../utils/selectboxData";

const SelectBoxUI = () => {
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
      const matchingOption = selectBoxData.find((option) => {
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
    <>
      <SelectContainer>
        <SelectInput
          value={selectedOptionDraft.name}
          placeholder="Select from the list..."
          onChange={onOptionDraftEdit}
          onKeyUp={onOptionSubmit}
          onClick={onOptionsOpen}
        />
        {selectedOption.name && (
          <i
            className="fa-solid fa-x"
            style={{
              cursor: "pointer",
              color: "#585858",
              fontSize: "10px",
            }}
            onClick={onOptionDelete}
          ></i>
        )}
      </SelectContainer>
      {areOptionsOpen && (
        <SelectList>
          {selectBoxData
            .filter((option) =>
              option.name
                .toLowerCase()
                .includes(selectedOptionDraft.name.toLowerCase())
            )
            .map((option) => (
              <SelectListElement
                key={option.id}
                onClick={() => onOptionSelect(option)}
              >
                {option.name}
              </SelectListElement>
            ))}
        </SelectList>
      )}
    </>
  );
};

export default SelectBoxUI;
