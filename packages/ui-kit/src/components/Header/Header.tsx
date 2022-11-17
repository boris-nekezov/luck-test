import Logo from '../../assets/logo.svg'

import './header.scss';

export interface HeaderProps {
  children?: JSX.Element | JSX.Element[],
}

export const Header = ({ children }: HeaderProps) => (
  <div className='header'>
    <div className="logo">
      <div className="logo__image">
        <Logo />
      </div>
      <div className="logo__text">
        <span className="logo__text_title">LUCK TEST</span>
        <span className="logo__text_slogan">CHECK YOU LUCK</span>
      </div>
    </div>
    {children}
  </div>
)

