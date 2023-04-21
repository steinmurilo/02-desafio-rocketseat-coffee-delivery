import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }

`

export const LocationButton = styled.button`
  border: 0;
  margin-right: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 5px;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme['purple-dark']};

  &:hover {
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme['purple']};
  }
`

export const CartButton = styled.button`
  border: 0;
  margin-left: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 5px;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
