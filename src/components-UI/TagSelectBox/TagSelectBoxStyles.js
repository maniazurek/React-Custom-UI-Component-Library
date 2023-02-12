import styled from "styled-components";

export const TagSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SingleTag = styled.span`
  border-radius: 6px;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 13px;
  min-width: fit-content;
`;

export const TagToSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 250px;
  height: fit-content;
  overflow-x: auto;
  border: 1px solid;
  border-color: ${({ mainColor }) => mainColor};
  border-radius: 11px;
  border-top: none;
  padding: 7px 10px 7px 7px;
  max-height: 150px;
`;

export const TagToSelect = styled.span`
  border: 1px solid #585858;
  border-radius: 6px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;
