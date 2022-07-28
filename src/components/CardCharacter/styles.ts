import styled, { css } from "styled-components";

interface ContainerProps {
  status: "Alive" | "Dead" | "unknown";
}

export const Container = styled.div<ContainerProps>`
  width: 255px;
  height: 100px;
  display: flex;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  ${(props) =>
    props.status === "Alive"
      ? css`
          background-color: #00ced1;
        `
      : props.status === "Dead"
      ? css`
          background-color: #e9967a;
        `
      : css`
          background-color: #c9c9c9;
        `}
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  object-fit: cover;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  font-size: 12px;
  padding: 10px;
  h3 {
    margin: 0;
  }
`;
