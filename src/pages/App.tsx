import { Outlet } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import AppMedia from '../components/Media'
import Title from '../components/Title'
import { MediaType } from '../types/Media'
import './App.css'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

const App = () => {

  const contentStyle = {
    backgroundColor: '#fff',
    margin: '3em 0em 0em',
    padding: '3em 0em',
  }

  const { MediaContextProvider, Media } = AppMedia

  return (
    <>
      <div className="background-image">
        <MediaContextProvider>
          <AppHeader />
          <Media greaterThan='mobile'>
            <Title media={MediaType.Desktop} />
          </Media>
          <Media at='mobile'>
            <Title media={MediaType.Mobile} />
          </Media>
          <Container style={contentStyle}>
            <Outlet />
          </Container>
          <Media greaterThan='mobile'>
            <AppFooter media={MediaType.Desktop} />
          </Media>
          <Media at='mobile'>
            <AppFooter media={MediaType.Mobile} />
          </Media>
        </MediaContextProvider>
      </div>
    </>
  )
}

export default App
