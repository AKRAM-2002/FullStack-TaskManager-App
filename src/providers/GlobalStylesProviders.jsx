"use client";
import PropTypes from 'prop-types';
import styled from 'styled-components';



export const GlobalStylesProviders = ({children}) => {
  return <GlobalStyles>{children}</GlobalStyles>
}

/** Typechecking */
GlobalStylesProviders.propTypes = {
  children: PropTypes.node,
}


const GlobalStyles = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
  width: 100%;
`;

export default GlobalStylesProviders
