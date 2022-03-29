import app from "./api"

const port = 3000

app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})