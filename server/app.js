const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const data=require("./model/schema.js")
const app=express();
const URI="mongodb+srv://srivastava:srivastava@contact.0s1fy3v.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI).then(result=>{app.listen(5000)})
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/form",(req,res)=>{
    console.log(req.body);
    const contactdata=new data((req.body));
    contactdata.save();
})