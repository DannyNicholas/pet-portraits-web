import { Location, useLocation, useNavigate } from 'react-router-dom'
import { Container, Dropdown, DropdownItem, DropdownMenu, Icon, Menu, MenuItem, SemanticICONS } from 'semantic-ui-react'
import AppMedia from '../components/Media'
import { ABOUT_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, HOME_ROUTE, PRICES_ROUTE } from '../constants/Constants'

const AppHeader = () => {

  const { Media } = AppMedia

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
  const navigate = useNavigate()

  const menuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

  return (
    <>
      {/* If we are displaying on a device with a resolution greater than a mobile, show the big menu buttons */}
      <Media greaterThan='mobile'>
        <Menu
          borderless
          icon='labeled'
          fixed='top'
          compact
          style={menuStyle}
        >
          <Container text>
            {
              menuItems.map((item, index) =>
                <MenuItem
                  key={index}
                  name={item.id}
                  active={location.pathname === item.route}
                  onClick={() => navigate(item.route)}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </MenuItem>
              )
            }
          </Container>
        </Menu>
        {/*
          The header's menu bar will normally overlay the selected page's content, which hides the top of the page.
          To avoid this we create a fixed height container in our header to push the page content down.
          */}
        <Container text style={{ height: '100px' }} />
      </Media>

      {/* If we are displaying on mobile device resolution, show the smaller dropdown menu */}
      <Media at='mobile'>
        <Container text>
          <Dropdown text='Menu' icon='bars' button className='icon' floating labeled style={menuStyle}>
            <DropdownMenu>
              {
                menuItems.map((item, index) =>
                  <DropdownItem
                    key={index}
                    text={item.id}
                    icon={item.icon}
                    onClick={() => navigate(item.route)}
                  />
                )}
            </DropdownMenu>
          </Dropdown>
        </Container>
        {/*
          The mobile menu bar will normally overlay the selected page's content, which hides the top of the page.
          To avoid this we create a small fixed height container in our header to push the page content down.
          */}
        <Container text style={{ height: '10px' }} />
      </Media>
    </>
  )
}

export default AppHeader
