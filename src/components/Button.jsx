import React from "react";
import { StyledButton } from "./style";

const Button = ({ disabled, children, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
