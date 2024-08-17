import React from 'react'

import { FooterContainer, Logo, SocialIcons, FooterText } from './styles'

import logo from '../../assets/images/logo.png'

import redesSociais from '../../assets/images/imagensRedesSociais.png'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo>
        <img src={logo} alt="efood logo" />
      </Logo>
      <SocialIcons>
        <img src={redesSociais} alt="efood Redes Sociais" />
      </SocialIcons>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </div>
  </FooterContainer>
)

export default Footer
