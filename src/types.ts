export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao2: string
  porcao: string
}

export type Categoria = {
  id: number
  titulo: string
  descricao: string
  capa: string
  destacado: boolean
  tipo: string
  avaliacao: number
  infos: string
  cardapio: MenuItem[]
}
