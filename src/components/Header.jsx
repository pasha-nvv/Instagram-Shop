import './../App.css'
import Logo from './Logo/Logo';
import Nav from './Navigation/Navigation';
import InstagramIcon from './InstagramIcon/InstagramIcon';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__top'>
      <Logo/>
      <Nav/>
      <InstagramIcon/>
      </div>
    </header>
  )
}

export default Header;