import { HeaderBar, LogoImg, TituloHome, TituloContainer } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderHome = () => (
  <>
    <HeaderBar>
      <Link to="/">
        <LogoImg src={logo} alt="eFood" />
      </Link>
      <TituloContainer>
        <TituloHome>
          Viva experiências gastronômicas <br></br>
          no conforto de sua sua casa
        </TituloHome>
      </TituloContainer>
    </HeaderBar>
  </>
)

export default HeaderHome
