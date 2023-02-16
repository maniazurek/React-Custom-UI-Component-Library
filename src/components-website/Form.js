import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenForm = () => {
    setIsOpen(true);
  };

  const onCloseForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FormAdd onClick={onOpenForm}>+</FormAdd>
      {isOpen && (
        <FormTaskOverlay>
          <FormContainer>
            <CloseForm onClick={onCloseForm}>x</CloseForm>
            <div>Form opened</div>
          </FormContainer>
        </FormTaskOverlay>
      )}
    </>
  );
};

const FormAdd = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #8fb593;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  border: 1px solid #000;
  background-color: #fff;
  width: 300px;
  height: 300px;
`;

const FormTaskOverlay = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseForm = styled.div`
  cursor: pointer;
`;

export default Form;
