import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: max-content;
`;
export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ disabled }) => (disabled === true ? "#808080" : "000")};
  cursor: ${({ disabled }) => (disabled === true ? "no-drop" : "pointer")};
`;

export const CheckboxSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 11px;
  height: 11px;
  border-color: ${({ disabled }) => (disabled === true ? "#808080" : "000")};
  border-radius: ${({ type }) => type === "checkbox" && "unset"};
  border-radius: ${({ type }) => type === "radio" && "50%"};
  background-color: ${({ mode, type, mainColor }) =>
    mode === true && type === "checkbox" && mainColor};
`;

export const CheckboxSelect = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${({ mode, mainColor }) =>
    mode === true ? mainColor : "#fff"};
  border-radius: ${({ type }) => type === "checkbox" && "unset"};
  border-radius: ${({ type }) => type === "radio" && "50%"};
`;

export const CheckboxData = styled.p`
  color: ${({ disabled }) => (disabled === true ? "#808080" : "000")};
`;

export const IconContainer = styled.div`
  display: ${({ type, mode }) => (type === "checkbox" && mode === true ? "flex" : "none")};
`;
