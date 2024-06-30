import { Link, Location, useLocation } from 'react-router-dom'
import { Container, Icon, Menu, MenuItem, SemanticICONS } from 'semantic-ui-react'
import { ABOUT_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, HOME_ROUTE, PRICES_ROUTE } from '../constants/Constants'

const AppHeader = () => {

  type MenuItem = {
    readonly id: string,
    readonly label: string,
    readonly icon: SemanticICONS,
    readonly route: string,
  }

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: 'home',
      route: HOME_ROUTE,
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: 'picture',
      route: GALLERY_ROUTE,
    },
    {
      id: 'price',
      label: 'Prices',
      icon: 'pound',
      route: PRICES_ROUTE,
    },
    {
      id: 'contact',
      label: 'Contact Me',
      icon: 'mail',
      route: CONTACT_ROUTE,
    },
    {
      id: 'about',
      label: 'About Me',
      icon: 'paint brush',
      route: ABOUT_ROUTE,
    }
  ]

  const location: Location = useLocation()

  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

  return (
    <>
      <Menu
        borderless
        icon='labeled'
        fixed='top'
        stackable
        style={fixedMenuStyle}
      >
        <Container text>
          {
            menuItems.map((item, index) =>
              <Link to={item.route} key={index}>
                <MenuItem
                  name={item.id}
                  active={location.pathname === item.route}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </MenuItem>
              </Link>
            )
          }
        </Container>
      </Menu>

      {/*
      The header's menu bar will normally overlay the selected page's content, which hides the top of the page.
      To avoid this we create a fixed height container in our header to push the page content down.
      */}
      <Container text style={{ height: '100px' }} />
    </>
  )
}

export default AppHeader
