import styled from "styled-components";

export const AccordionTitle = styled.div`
  font-size: 20px;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 7px;
  margin-bottom: 7px;
  color: #fff;
  background-color: ${({ disabled }) =>
    disabled === false ? "#8fb593" : "#d8d8d8"};
  border: ${({ disabled }) =>
    disabled === false ? "1px solid #8fb593" : "1px solid #d8d8d8"};
`;

export const AccordionDescription = styled.div`
  font-size: 12px;
  border: 1px solid #8fb593;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
`;