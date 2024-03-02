import axios from "axios";
import express from "express";


const app =  express();

app.get('/', (req, res) => {
  //Serve my react app
  
})

app.get('/api/quotes/random', async (req, res) => {
  try {
    const response = await axios.get('https://quotable.io/random');
    res.header('Access-Control-Allow-Origin', '*'); 
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching motivational quote:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
