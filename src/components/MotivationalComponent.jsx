// Import necessary libraries
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../context/globalProvider';


const MotivationalQuote = () => {

    const { theme } = useGlobalState(); 
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

  
    useEffect(() => {
      fetchMotivationalQuote();
    }, []);
  
    const fetchMotivationalQuote = async () => {
      try {
        const response = await axios.get('/api/quotes/random');

        /* use Ternary operator to check on the quote content length, */
        setQuote(response.data.content.length > 100? await fetchMotivationalQuote() : response.data.content);
        if (quote)
            setAuthor(response.data.author);        
      } catch (error) {
        console.error('Error fetching motivational quote:', error);
      }
    };
  
    return (
      <MotivationalQuoteSection theme={theme}>
        <QuoteContent theme={theme}>
            <QuoteText theme={theme}>{quote}</QuoteText>
            <QuoteAuthor>{author}</QuoteAuthor>
        </QuoteContent>
        <RefreshButton theme={theme} onClick={fetchMotivationalQuote}>Refresh Quote</RefreshButton>
      </MotivationalQuoteSection>
    );
  };

// Styled components
const MotivationalQuoteSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.borderColor2};
  padding: 0px;
  border-radius: 5px;
`;


const QuoteText = styled.p`
  
  font-size: 14px;
  margin-bottom: 5px;
  &::before{
    content: "“ ";
    font-size: 30px;
    color: ${(props) => props.theme.borderColor2};
  }
  &::after{
    content: " ”";
    font-size: 30px;
    color: ${(props) => props.theme.borderColor2};
  }
`;

const QuoteAuthor = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #999999;
  &::before{
    content: "— ";
    font-size: 10px;
    color: #181818;
  }
  `
  
  const QuoteContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -80px;
    `

const RefreshButton = styled.button`
  background-color: ${(props) => props.theme.btnColorPrimary};
  color: black;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  right: 40px;
  margin-left: 15rem;
`;

export default MotivationalQuote;
