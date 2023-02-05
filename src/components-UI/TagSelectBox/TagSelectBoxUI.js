import React, { useState, useEffect } from "react";
import tagsSuggestionsData from "../../utils/tagsSuggestionsData";
import { SelectInput, SelectContainer } from "../SelectBox/SelectBoxStyles";
import {
  TagSelectContainer,
  SingleTag,
  TagToSelectContainer,
  SelectedTagsContainer,
} from "./TagSelectBoxStyles";

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
      const existingTag = tags.find((tag) => tag === matchingTag.id);
      if (matchingTag && !existingTag) {
        onTagAdd(matchingTag.id);
        setInternalTagsSuggestions(
          internalTagsSuggestions.filter((tag) => tag.id !== matchingTag.id)
        );
      }
      setInputValue("");
    }
  };

  const handleTagAdd = (tagToAddID) => {
    onTagAdd(tagToAddID);
    setInternalTagsSuggestions(
      internalTagsSuggestions.filter((tag) => tag.id !== tagToAddID)
    );
    setInputValue("");
  };

  const handleTagRemove = (tagToRemoveID) => {
    onTagRemove(tagToRemoveID);
    const removedTag = tagsSuggestionsData.find(
      (tag) => tag.id === tagToRemoveID
    );
    setInternalTagsSuggestions([...internalTagsSuggestions, removedTag]);
  };

  return (
    <TagSelectContainer>
      <SelectContainer>
        <SelectedTagsContainer>
          {tags.map((tagID) => {
            const currentTag = tagsSuggestionsData.find(
              (tagToShow) => tagToShow.id === tagID
            );
            return (
              <SingleTag
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
              </SingleTag>
            );
          })}
        </SelectedTagsContainer>
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
                <SingleTag
                  style={{ backgroundColor: tag.color, cursor: "pointer" }}
                  key={tag.id}
                  onClick={() => handleTagAdd(tag.id)}
                >
                  {tag.name}
                </SingleTag>
              ))}
        </TagToSelectContainer>
      )}
    </TagSelectContainer>
  );
};

export default TagSelectBoxUI;
