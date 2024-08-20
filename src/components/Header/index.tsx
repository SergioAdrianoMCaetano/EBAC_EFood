import { Link } from 'react-router-dom'

import { HeaderBar, LinkItem, Links, LogoImg, LinkCart } from './styles'

import logo from '../../assets/images/logo.png'

import carrinho from '../../assets/images/carrinho.svg'
import HeaderImg from '../HeaderImg'

const Header = () => (
  <>
    <HeaderBar>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/">Restaurantes</Link>
          </LinkItem>
        </Links>
      </nav>
      <LogoImg src={logo} alt="eFood" />
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  </>
)

export default Header
