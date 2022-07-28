import styled, { css } from "styled-components";

interface ButtonStyledProps {
  toDelete: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 100%;
  padding: 5px;
  color: #ccc;
  ${(props) =>
    props.toDelete
      ? css`
          background-color: blue;
        `
      : css`
          background-color: red;
        `}
`;
