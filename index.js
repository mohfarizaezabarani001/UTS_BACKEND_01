const express = require('express')
const app = express()
const port = 3000
const routerTopup = require(".../routers/topup");

app.use(express.json());
app.use(express.urlencoded({ extend: true}));

app.use(routerTopup);

app.listen(port, ()=>{
    console.log('listening port ${port}')
});