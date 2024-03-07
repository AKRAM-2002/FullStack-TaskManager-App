import React, { useEffect } from "react";
import { GlobalProvider } from "../context/globalProvider";
import PropTypes from 'prop-types';
import toast, {Toaster} from "react-hot-toast";

export const ContextProvider = ({children}) => {

  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() =>{
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if(!isReady){
    return null;
  }
    
  return (
    <GlobalProvider>
      <Toaster />
        {children}
    </GlobalProvider>
  )
}


ContextProvider.propTypes = {
    children: PropTypes.node,
  }

