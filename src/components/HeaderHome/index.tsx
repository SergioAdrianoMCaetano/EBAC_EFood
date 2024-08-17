import { HeaderBar, LogoImg, TituloHome, TituloContainer } from './styles'
import logo from '../../assets/images/logo.png'

const HeaderHome = () => (
  <>
    <HeaderBar>
      <LogoImg src={logo} alt="eFood" />
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
