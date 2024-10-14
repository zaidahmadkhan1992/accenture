const express=require('express');
var verification = require("./helperfuction");

const app=express();

const data = [{name:"zaid"},{name:"alice"},{name:"aryan"},
    {name:"Nisha"},{name:"Alice"},{name:"Ravi"},
    {name:"Rajesh"},{name:"Laxhimi"},{name:"Leena"},
    {name:"Raj"},{name:"Amit"},{name:"Mukund"},
    {name:"Mahesh"},{name:"Mahi"},{name:"Virat"},
    {name:"Sachin"},{name:"Rohit"},{name:"Sharma"},
];

app.use(verification.jwt);

app.get('/api/EmpData/:index/:noofrecord',(req,res)=>{
    const currentPage=req.params.index;
    const pageSize=req.params.noofrecord;
    const records = verification.pagication(data, currentPage, pageSize);
    res.send(records)
})

app.listen(8080,
    console.log("app is running on port 8080")
)