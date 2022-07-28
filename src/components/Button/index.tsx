import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  toDelete?: boolean;
}

const Button = ({ children, toDelete = false, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled toDelete={toDelete} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
