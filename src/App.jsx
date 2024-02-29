import './globals.css';
import {Sidebar} from './components/Sidebar/Sidebar'

import { GlobalStylesProviders } from './providers/GlobalStylesProviders';
import Home from './components/Content/Content';
import {ContextProvider} from './providers/ContextProvider';

function App() {

  return (
    <>
    <ContextProvider>
      <GlobalStylesProviders>
        <Sidebar/>
        <Home/>
      </GlobalStylesProviders>
    </ContextProvider>
    </>
  )
}

export default App
