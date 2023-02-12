import React, { useState, useEffect, useRef } from "react";
import tagsSuggestionsData from "../../utils/tagsSuggestionsData";
import { SelectInput, SelectContainer } from "../SelectBox/SelectBoxStyles";
import {
  TagSelectContainer,
  SingleTag,
  TagToSelectContainer,
} from "./TagSelectBoxStyles";

const TagSelectBoxUI = ({ mainColor }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [internalTagsSuggestions, setInternalTagsSuggestions] =
    useState(tagsSuggestionsData);
  const [tags, setTags] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.scrollIntoView({ inline: "end" });
  }, [tags]);

  useEffect(() => {
    window.addEventListener("click", () => setIsSuggestionsOpen(false));
  }, []);

  const inputFocus = () => {
    inputRef.current?.focus();
  };

  const onTagAdd = (tagToAdd) => {
    setTags([...tags, tagToAdd]);
  };

  const onTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const onFormSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const matchingTag = tagsSuggestionsData.find((tag) =>
        tag.name.startsWith(inputValue)
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
    inputFocus();
  };

  const handleTagRemove = (tagToRemoveID) => {
    onTagRemove(tagToRemoveID);
    const removedTag = tagsSuggestionsData.find(
      (tag) => tag.id === tagToRemoveID
    );
    setInternalTagsSuggestions([...internalTagsSuggestions, removedTag]);
    inputFocus();
  };

  return (
    <TagSelectContainer>
      <SelectContainer mainColor={mainColor}>
        {tags.map((tagID) => {
          const currentTag = tagsSuggestionsData.find(
            (tagToShow) => tagToShow.id === tagID
          );
          return (
            <SingleTag
              style={{ backgroundColor: currentTag.color }}
              key={tagID}
            >
              {currentTag.name}
              <i
                className="fa-solid fa-x"
                style={{
                  cursor: "pointer",
                  color: "#000",
                  fontSize: "12px",
                }}
                onClick={() => handleTagRemove(tagID)}
              ></i>
            </SingleTag>
          );
        })}
        <SelectInput
          ref={inputRef}
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
        <TagToSelectContainer mainColor={mainColor}>
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
