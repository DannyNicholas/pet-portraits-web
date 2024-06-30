import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import './App.css'
import { Container } from 'semantic-ui-react'

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
        <Container style={contentStyle}>
          <Outlet />
        </Container>
        <AppFooter />
      </div>
    </>
  )
}

export default App
