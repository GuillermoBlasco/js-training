const express = require('express');
const app = express();
app.use(express.json()) // for parsing application/json

const userRouter = require('./routes/userRoutes');
app.listen(3001, () => console.log('server started'));

app.use("/user", userRouter)
