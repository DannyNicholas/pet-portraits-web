import './App.css'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppPage from './AppPage'
import AppTitle from './AppTitle'
import AppMedia from './Media'

const App = () => {

  const { MediaContextProvider } = AppMedia

  return (
    <>
      <div className="background-image">
        <MediaContextProvider>
          <AppHeader />
          <AppTitle />
          <AppPage />
          <AppFooter />
        </MediaContextProvider>
      </div>
    </>
  )
}

export default App
