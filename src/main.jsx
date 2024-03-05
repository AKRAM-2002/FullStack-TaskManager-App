import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './globals.css';
import ErrorBoundary from './ErrorBoundary.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { dark, neobrutalism  } from '@clerk/themes';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <React.StrictMode>
      <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
         
      }}
      >
        <App />
      </ClerkProvider>
    </React.StrictMode>
  </ErrorBoundary>
);
