import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css';

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]

const Navbar = () => {
  return (
    <nav className={styles.menu_container}>
     { menuItems?.length > 0 &&
        menuItems.map(({text, href}) => (
          <ActiveLink key={href} text={text} href={href} />
        ))
        
      }
    </nav>
  )
}

export default Navbar
