import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'O remake do clássico de terror da Capcom, com gráficos atualizados e câmera em terceira pessoa.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Os jogos de Star Wars são ambientados no universo da saga de ficção científica criada por George Lucas.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Inspirado em Harry Potter, o RPG “Hogwarts Legacy” permite que você crie e controle um estudante da Escola de Magia e Bruxaria de Hogwarts nos anos 1800.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'A sequência de “Alan Wake”, um survival horror com foco em narrativa e terror psicológico.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'O remake do clássico de terror da Capcom, com gráficos atualizados e câmera em terceira pessoa.',
    title: 'Zelda',
    system: 'PS5',
    infos: ['25%', 'R$ 130,00'],
    image: zelda
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'O remake do clássico de terror da Capcom, com gráficos atualizados e câmera em terceira pessoa.',
    title: 'Diablo',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'O remake do clássico de terror da Capcom, com gráficos atualizados e câmera em terceira pessoa.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['15%', 'R$ 230,00'],
    image: resident
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'O remake do clássico de terror da Capcom, com gráficos atualizados e câmera em terceira pessoa.',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['9%', 'R$ 225,00'],
    image: starWars
  }
]

export const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
