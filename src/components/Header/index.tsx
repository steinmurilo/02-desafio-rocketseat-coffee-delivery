import { CartButton, HeaderContainer, LocationButton } from './styles'

import logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div style={{ display: 'flex' }}>
        <LocationButton>
          <MapPin size={22} weight='fill' />
          Indaiatuba, SP
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight='fill' />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
