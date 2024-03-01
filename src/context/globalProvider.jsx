import { createContext, useContext, useState} from "react";
import  themes  from "./theme";
import PropTypes from "prop-types";


export const  GlobalContext = createContext();
export const GlobalUpdateContext = createContext();


export const GlobalProvider = ({ children }) => {


    const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
    const theme = themes[selectedThemeIndex];


    return (
        <GlobalContext.Provider value={{ 
            theme,
        }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}

GlobalProvider.propTypes = {
    children: PropTypes.node,
  };

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdateState = () => useContext(GlobalUpdateContext);

