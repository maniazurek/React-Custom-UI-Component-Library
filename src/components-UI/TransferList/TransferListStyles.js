import styled from "styled-components";

export const TransferListContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const TransferList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 0px;
  list-style: none;
  border: 1px solid #8fb593;
  border-radius: 11px;
  width: 200px;
  height: 300px;
  padding: 7px;
  overflow: auto;
`;

export const TransferListElement = styled.li`
  cursor: pointer;
  padding: 4px;
  border-radius: 11px;
  &:hover {
    background-color: #8fb593;
    border-radius: 11px;
    color: #fff;
  }
  background-color: ${({ clicked }) => clicked && "#8fb593"};
  color: ${({ clicked }) => (clicked ? "#fff" : "#585858")};
`;

export const TransferItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;
