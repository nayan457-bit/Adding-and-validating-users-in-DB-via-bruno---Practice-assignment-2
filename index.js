const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json()); 
app.use(cors()); 


const userRoutes = require('./controller/routes');
const connectDB = require('./db');
app.use('/api', userRoutes); 

const PORT = process.env.PORT || 3010;
const uri = "mongodb+srv://ruchithata83:ruchitha@signup.9jubx.mongodb.net/?retryWrites=true&w=majority&appName=signup"

connectDB(uri);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});