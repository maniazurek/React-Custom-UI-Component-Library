import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: max-content;
`;
export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: ${({ disabled }) => (disabled === true ? "#808080" : "000")};
`;

export const CheckboxSelect = styled.span`
  border: 1px solid;
  width: 10px;
  height: 10px;
  background-color: ${({ mode }) => (mode === true ? "#8fb593" : "#fff")};
  border-color: ${({ disabled }) => (disabled === true ? "#808080" : "000")};
`;

export const CheckboxData = styled.p`
  color: ${({ disabled }) => (disabled === true ? "#808080" : "000")};
`;
