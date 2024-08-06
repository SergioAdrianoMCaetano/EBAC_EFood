import { HeaderBar, LinkItem, Links, LogoImg, LinkCart } from './styles'

import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <>
    <HeaderBar>
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Restaurantes</a>
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
