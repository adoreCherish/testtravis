const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World')
})
//helloa
app.listen(3000, function () {
    console.log('3000!')
});