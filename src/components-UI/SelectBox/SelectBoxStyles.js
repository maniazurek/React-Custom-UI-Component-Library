import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 250px;
  height: 25px;
  border: 1px solid #8fb593;
  border-radius: 11px;
  padding: 7px 10px 7px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  gap: 10px;
`;

export const SelectInput = styled.input`
  outline: none;
  border: none;
  color: #585858;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  margin-right: auto;
`;

export const SelectList = styled.ul`
  margin-top: 5px;
  margin-bottom: 0px;
  list-style: none;
  border: 1px solid #8fb593;
  border-radius: 11px;
  width: 250px;
  height: 150px;
  padding: 7px;
  overflow: auto;
`;

export const SelectListElement = styled.li`
  color: #585858;
  cursor: pointer;
  padding: 4px;
  &:hover {
    background-color: #8fb593;
    border-radius: 11px;
    color: #fff;
  }
`;
