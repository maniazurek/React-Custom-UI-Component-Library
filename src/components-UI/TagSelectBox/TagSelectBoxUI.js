import React, { useState, useEffect } from "react";
import tagsSuggestionsData from "../../utils/tagsSuggestionsData";
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
    <div className="new-task__form-tags">
      <div className="new-task__tags-input_suggestions">
        <input
          placeholder="Type tag..."
          onKeyPress={onFormSubmit}
          className="new-task__select-tags"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onClick={(event) => {
            setIsSuggestionsOpen(true);
            event.stopPropagation();
          }}
        />
        {isSuggestionsOpen && (
          <span className="new-task__tags-instruction">
            Type tag or choose from the list:
          </span>
        )}

        <div className="new-task__tags-suggestions">
          {isSuggestionsOpen &&
            internalTagsSuggestions
              .filter((tag) =>
                tag.name.toLowerCase().startsWith(inputValue.toLowerCase())
              )
              .map((tag) => (
                <span
                  style={{ color: tag.color }}
                  key={tag._id}
                  onClick={() => handleTagAdd(tag._id)}
                  className="new-task__tags-suggestions_element"
                >
                  {tag.name}
                </span>
              ))}
        </div>
      </div>
      <div className="new-task__tags-selected">
        {tags.map((tagID) => {
          const currentTag = tagsSuggestionsData.find(
            (tagToShow) => tagToShow._id === tagID
          );
          return (
            <span
              className="new-task__tag-selected"
              style={{ backgroundColor: currentTag.color }}
              key={tagID}
            >
              <span onClick={() => handleTagRemove(tagID)}>X </span>
              {currentTag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TagSelectBoxUI;
