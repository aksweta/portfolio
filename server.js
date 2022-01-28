const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080


app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/login',(req,res) => {
    if(req.query.userName === "Swarit" && req.query.pass === '12345'){
    res.send({message: '<b class="success">login done</b>'});
    }
    else {
        res.send({message: '<b class="error">login failed </b>'});
    }
})

    

