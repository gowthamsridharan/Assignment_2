const express = require('express')
const app = express()
NOTES =[
    {
        "id":1,
        "title":"First note",
        "description":"this is the First note"
    },
    {
        "id":2,
        "title":"Second note",
        "description":"this is the Second note"
    },
    {
        "id":3,
        "title":"Third note",
        "description":"this is the third note"
    },
]
app.get('/',firstRoute)

app.get('/notes',(req,res)=>{
    res.send(NOTES)
})

app.get('/notes/:id',(req,res)=>{
    const id = req.params.id
    for(var i=0;i>NOTES.length;i++){
        if(NOTES[i].id==id){
            res.send(NOTES[i])
        }
    }
})

function firstRoute(req,res){
    res.send('Hello World')
}

app.listen(3000,printMessage)

function printMessage(){
    console.log('server is running on port 3000')
}
