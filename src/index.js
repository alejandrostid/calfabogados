const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.set('port',process.env.PORT ||5000);

app.listen(app.get('port'),()=>{
    console.log('el servidor se esta ejecutando en el localhost ' + app.get('port'))
})