import './App.css'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppPage from './AppPage'
import AppTitle from './AppTitle'
import { MediaContextProvider } from './Media'

const App = () => (
  <>
    <div className="background-image">
      <MediaContextProvider>
        <div className="content">
          <AppHeader />
          <AppTitle />
          <AppPage />
          <AppFooter />
          <div className="box1"></div>
        </div>
      </MediaContextProvider>
    </div>
  </>
)

export default App
