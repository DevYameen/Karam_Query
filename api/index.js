const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const queryRoute = require('./routes/queryRoute');
const adRoute = require('./routes/adRoute');


require('dotenv').config();

const port = process.env.PORT || 8000;
const allowedOrigin = process.env.FRONTEND_URL; 


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection Done 👍"))
.catch((err) => console.log("Error Found 😒", err));


app.use(cors({
    origin: allowedOrigin, 
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'], 
    credentials: true 
}));


app.use(express.json());
app.use(adRoute);
app.use(queryRoute);
app.use(userRouter);


app.listen(port, () => console.log(`Server started on ${port}`));
