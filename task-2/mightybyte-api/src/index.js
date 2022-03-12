const express = require('express');
const app = express();
const router = express.Router();

const port = 8080;

router.get('/', function(req,res){
  res.json({ status: 'Ok' });
});

app.use('/', router);

app.listen(port, function () {
  console.log('API listening on port ' + port)
})
