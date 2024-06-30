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

  return (
    <>
      <div className="background-image">
        <AppHeader />
        <Header size='huge' textAlign='center' inverted style={{
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: '0.5em',
          marginTop: '1em',
        }}>
          MELANIE NICHOLAS
        </Header>
        <Header size='large' textAlign='center' inverted style={{
          fontSize: '3em',
          fontWeight: 'normal',
          marginBottom: '1em',
          marginTop: '0.5em',
        }}>
          Animal Portrait Artist
        </Header>
        <Container style={contentStyle}>
          <Outlet />
        </Container>
        <AppFooter />
      </div>
    </>
  )
}

export default App
