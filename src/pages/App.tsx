import { createMedia } from '@artsy/fresnel'
import { Outlet } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'
import './App.css'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

const App = () => {

  const contentStyle = {
    backgroundColor: '#fff',
    margin: '3em 0em 0em',
    padding: '3em 0em',
  }

  const hugeText = {
    fontSize: '4em',
    fontWeight: 'normal',
    marginBottom: '0.5em',
    marginTop: '1em',
  }

  const largeText = {
    fontSize: '3em',
    fontWeight: 'normal',
    marginBottom: '1em',
    marginTop: '0.5em',
  }

  const name = 'MELANIE NICHOLAS'
  const occupation = 'Animal Portrait Artist'

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })

  return (
    <>
      <div className="background-image">
        <MediaContextProvider>
          <AppHeader />
          <Media greaterThan='mobile'>
            <Header size='huge' textAlign='center' inverted style={hugeText}>
              {name}
            </Header>
            <Header size='large' textAlign='center' inverted style={largeText}>
              {occupation}
            </Header>
          </Media>
          <Media at='mobile'>
            <Header size='huge' textAlign='center' inverted>
              {name}
            </Header>
            <Header size='large' textAlign='center' inverted>
              {occupation}
            </Header>
          </Media>
          <Container style={contentStyle}>
            <Outlet />
          </Container>
          <AppFooter />
        </MediaContextProvider>
      </div>
    </>
  )
}

export default App
