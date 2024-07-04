import { createMedia } from '@artsy/fresnel'
import { useState } from 'react'
import { Location, useLocation, useNavigate } from 'react-router-dom'
import { Container, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, Icon, Menu, MenuItem, Segment, SemanticICONS, Sidebar } from 'semantic-ui-react'
import { ABOUT_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, HOME_ROUTE, PRICES_ROUTE } from '../constants/Constants'

const AppHeader = () => {

  type MenuItem = {
    readonly id: string,
    readonly label: string,
    readonly icon: SemanticICONS,
    readonly route: string,
  }

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })

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

  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

  interface SideBar {
    sidebarOpened?: boolean,
  }

  const [sidebarOpened, setSidebarOpened] = useState<SideBar>({ sidebarOpened: false })

  const handleSidebarHide = () => setSidebarOpened({ sidebarOpened: false })

  const handleToggle = () => setSidebarOpened({ sidebarOpened: true })

  const gap = sidebarOpened.sidebarOpened ? 50 * 5 : 0

  return (
    <>
      <MediaContextProvider>
        <Media greaterThan='mobile'>
          <Menu
            borderless
            icon='labeled'
            fixed='top'
            compact
            style={fixedMenuStyle}
          >
            <Container text>
              {
                menuItems.map((item, index) =>
                  // <Link to={item.route} key={index}>
                  <MenuItem
                    key={index}
                    name={item.id}
                    active={location.pathname === item.route}
                    onClick={() => navigate(item.route)}
                  >
                    <Icon name={item.icon} />
                    {item.label}
                  </MenuItem>
                  // </Link>
                )
              }
            </Container>
          </Menu>
        </Media>

        <Media at='mobile'>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation='overlay'
              // inverted
              onHide={handleSidebarHide}
              vertical
              visible={sidebarOpened.sidebarOpened}
            >
              <Container text>

                {/* <Menu.Item onClick={handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item> */}

                {
                  menuItems.map((item, index) =>
                    // <Link to={item.route} key={index}>
                    <MenuItem
                      key={index}
                      name={item.id}
                      active={location.pathname === item.route}
                      onClick={() => navigate(item.route)}
                    >
                      <Icon name={item.icon} />
                      {item.label}
                    </MenuItem>
                    // </Link>
                  )
                }
              </Container>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment
                // inverted
                textAlign='center'
                style={{ minHeight: gap, padding: '1em 0em' }}
                vertical
              >
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    {/* <Menu.Item position='right'>
                      <Button as='a' inverted>
                        Log in
                      </Button>
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Menu.Item> */}
                  </Menu>
                </Container>
                {/* <HomepageHeading mobile /> */}
              </Segment>


              {/* {children} */}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Media>
      </MediaContextProvider>




      {/*
      The header's menu bar will normally overlay the selected page's content, which hides the top of the page.
      To avoid this we create a fixed height container in our header to push the page content down.
      */}
      <Container text style={{ height: '100px' }} />

      <Dropdown text='File'>
        <DropdownMenu>
          <DropdownItem text='New' />
          <DropdownItem text='Open...' description='ctrl + o' />
          <DropdownItem text='Save as...' description='ctrl + s' />
          <DropdownItem text='Rename' description='ctrl + r' />
          <DropdownItem text='Make a copy' />
          <DropdownItem icon='folder' text='Move to folder' />
          <DropdownItem icon='trash' text='Move to trash' />
          <DropdownDivider />
          <DropdownItem text='Download As...' />
          <DropdownItem text='Publish To Web' />
          <DropdownItem text='E-mail Collaborators' />
        </DropdownMenu>
      </Dropdown>

      <Container text>
        <Dropdown text='Menu' icon='picture' button className='icon' floating labeled>
          <DropdownMenu>
            {
              menuItems.map((item, index) =>
                // <Link to={item.route} key={index}>
                <DropdownItem
                  key={index}
                  text={item.id}
                  icon={item.icon}
                  onClick={() => navigate(item.route)}
                />
                // </Link>
              )}
          </DropdownMenu>
        </Dropdown>
      </Container>
    </>
  )
}

export default AppHeader
