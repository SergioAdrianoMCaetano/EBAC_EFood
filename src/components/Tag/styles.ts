import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelhoSuave};
  color: ${cores.laranjaClaro};
  font-size: 12px;
  padding: 4px 6px;
  margin-left: 8px;
  display: inline-block;
`
