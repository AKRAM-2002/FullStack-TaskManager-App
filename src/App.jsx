import './globals.css';
import {Sidebar} from './components/Sidebar/Sidebar'

import { GlobalStylesProviders } from './providers/GlobalStylesProviders';
import Home from './components/Content/Content';
import {ContextProvider} from './providers/ContextProvider';
import  {Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {

  return (
    <>
    
    <ContextProvider>
      <GlobalStylesProviders>
      <Router> 
            <Sidebar />
            <Home />
            
        </Router>
      </GlobalStylesProviders>
    </ContextProvider>
    </>
  )
}

export default App
