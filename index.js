
const express=require("express");
const { createTodo, updateTodo } = require("./types");

const app=express();

const port=3000;

app.use(express.json())

app.get('/todos',(req,res)=>{

    const payload=req.body;

    const parsedPayload=createTodo.safeParse(payload);

    if(!parsedPayload.success){

        res.json({
            msg:"Your input type is wrong"
        })
        return
    }

})

app.post('/todo',(req,res)=>{

})

app.put('/completed',(req,res)=>{

    const payload=req.body;

    const parsedPayload=updateTodo.safeParse(payload);
    
    if(!parsedPayload.success){

        res.json({
            msg:"Your input type is wrong"
        })
    }
})