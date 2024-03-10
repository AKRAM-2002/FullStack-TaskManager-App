import axios from "axios";
import express from "express";


const app = express();


app.use(express.json());

app.get('/api/quotes/random', async (req, res) => {
  try {
    const response = await axios.get('https://quotable.io/random');
    res.header('Access-Control-Allow-Origin', '*'); 
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching quotes:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// app.get('/api/tasks', async (req, res) => {
//   try {
//     const tasks = await prisma.task.findMany();
//     res.header('Access-Control-Allow-Origin', '*'); 
//     res.json(tasks);
//   } catch (error) {
//     console.error('Error fetching tasks:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.put('/api/tasks/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;

//   try {
//     const updatedTask = await prisma.task.update({
//       where: { id },
//       data: { title, description },
//     });

//     res.json(updatedTask);
//   } catch (error) {
//     console.error('Error updating task:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/api/tasks', async (req, res) => {
//   try {
//     const { userId } = auth();

//     if(!userId) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const { title, description, date, completed, incompleted } = req.body();

//     if(!title || !description || !date ){
//       return res.status(400).json({ error: 'Missing Required Fields' });
//     }

//     if (title.length < 3){
//       return res.status(400).json({ error: 'Title must be at least 3 characters' });
//     }

//     const task = await prisma.task.create({
//       data: { 
//         title, 
//         description, 
//         date, 
//         isCompleted: completed, 
//         incompleted: incompleted, 
//         userId ,
//       },
//     });

//     return res.json(task);
//   } catch (error) {
//     console.error('Error creating task:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.delete('/api/tasks/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedTask = await prisma.task.delete({
//       where: { id },
//     });
//     res.json(deletedTask);
    
//   } catch (error) {
//     console.error('Error deleting task:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
