const express = require('express')
const Router = require('./router')
const app = express();

app.use("/data", Router);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`)
}).on('error', (e) => {
  console.log('Error happened: ', e.message)
})