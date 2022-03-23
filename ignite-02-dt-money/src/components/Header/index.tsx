import React from "react";
import { Container, Content } from "./Header.styles";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt Money" />
        <button type="button" onClick={onOpenNewTransitionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
