import React, { useState, useEffect } from "react";
import tagsSuggestionsData from "../../utils/tagsSuggestionsData";
import { SelectInput, SelectContainer } from "../SelectBox/SelectBoxStyles";
import styled from "styled-components";

const TagSelectBoxUI = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [internalTagsSuggestions, setInternalTagsSuggestions] =
    useState(tagsSuggestionsData);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    window.addEventListener("click", () => setIsSuggestionsOpen(false));
  }, []);

  const onTagAdd = (tagToAdd) => {
    setTags([...tags, tagToAdd]);
  };

  const onTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const onFormSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const matchingTag = tagsSuggestionsData.find(
        (tag) => tag.name === inputValue
      );
      const existingTag = tags.find((tag) => tag === matchingTag._id);
      if (matchingTag && !existingTag) {
        onTagAdd(matchingTag._id);
        setInternalTagsSuggestions(
          internalTagsSuggestions.filter((tag) => tag._id !== matchingTag._id)
        );
      }
      setInputValue("");
    }
  };

  const handleTagAdd = (tagToAddID) => {
    onTagAdd(tagToAddID);
    setInternalTagsSuggestions(
      internalTagsSuggestions.filter((tag) => tag._id !== tagToAddID)
    );
    setInputValue("");
  };

  const handleTagRemove = (tagToRemoveID) => {
    onTagRemove(tagToRemoveID);
    const removedTag = tagsSuggestionsData.find(
      (tag) => tag._id === tagToRemoveID
    );
    setInternalTagsSuggestions([...internalTagsSuggestions, removedTag]);
  };

  return (
    <>
      <TagSelectContainer>
        <SelectContainer>
          <SelectInput
            placeholder="Type tag..."
            onKeyPress={onFormSubmit}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onClick={(event) => {
              setIsSuggestionsOpen(true);
              event.stopPropagation();
            }}
          />
        </SelectContainer>
        {isSuggestionsOpen && (
          <TagToSelectContainer>
            {isSuggestionsOpen &&
              internalTagsSuggestions
                .filter((tag) =>
                  tag.name.toLowerCase().startsWith(inputValue.toLowerCase())
                )
                .map((tag) => (
                  <TagToSelect
                    style={{ color: tag.color }}
                    key={tag._id}
                    onClick={() => handleTagAdd(tag._id)}
                  >
                    {tag.name}
                  </TagToSelect>
                ))}
          </TagToSelectContainer>
        )}
      </TagSelectContainer>
      <div className="new-task__tags-selected">
        {tags.map((tagID) => {
          const currentTag = tagsSuggestionsData.find(
            (tagToShow) => tagToShow._id === tagID
          );
          return (
            <SelectedTag
              style={{ backgroundColor: currentTag.color }}
              key={tagID}
            >
              <i
                className="fa-solid fa-x"
                style={{
                  cursor: "pointer",
                  color: "#000",
                  fontSize: "12px",
                }}
                onClick={() => handleTagRemove(tagID)}
              ></i>
              {currentTag.name}
            </SelectedTag>
          );
        })}
      </div>
    </>
  );
};

const TagSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectedTag = styled.span`
  border-radius: 6px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const TagToSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 250px;
  height: fit-content;
  overflow-x: auto;
  border: 1px solid #8fb593;
  border-radius: 11px;
  border-top: none;
  padding: 7px 10px 7px 7px;
`;

const TagToSelect = styled.span`
  border: 1px solid #585858;
  border-radius: 6px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

export default TagSelectBoxUI;
