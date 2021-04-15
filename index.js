require('dotenv').config();

const express=require('express');
const app=express();
const mongoose=require('mongoose');

const port=process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('Connect successfully'));

app.use(express.json());
const subscribersRouter=require('./routes/subscribers');
app.use('/subscribers',subscribersRouter);

app.listen(port,()=>console.log(`listening on port ${port}`));