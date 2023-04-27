import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.primary};
`

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>
}
