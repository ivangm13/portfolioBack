const express = require('express');
const app = express();


require('dotenv').config();
require('./db');
/* app.get('/',(req, res)=>{
    res.send('Hola servidor');

}); */

const apiRouter = require('./routes/api');
app.use('/api',apiRouter);

const PORT = process.env.PORT || 3100;
app.listen(PORT, ()=>{
console.log(`Servidor escuchando en puerto ${PORT}`);
});