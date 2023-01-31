import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CheckboxItem = styled.span`
  border: 1px solid #000;
  width: 10px;
  height: 10px;
  background-color: ${({ mode }) => (mode === true ? "#8fb593" : "#fff")};
`;
