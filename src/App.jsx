import './globals.css';
import {Sidebar} from './components/Sidebar/Sidebar'

import { GlobalStylesProviders } from './providers/GlobalStylesProviders';
import Home from './components/Content/Content';
import {ContextProvider} from './providers/ContextProvider';
import  {Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import LandingPage from './pages/LandingPage/LandingPage';

function App() {

  return (
    <>
     <SignedOut>
        <LandingPage/>
      </SignedOut>
      <SignedIn>
        {/* <UserButton /> */}
        <ContextProvider>
          <GlobalStylesProviders>
          <Router> 
                <Sidebar />
                <Home />
            </Router>
          </GlobalStylesProviders>
        </ContextProvider>
      </SignedIn>
    </>
  )
}

export default App
