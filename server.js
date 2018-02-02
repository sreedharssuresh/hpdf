const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const {Wit} = require('node-wit');
const client = new Wit({accessToken: 'N7QFSFOO2W3DZ7B2B4EPZ26LOEDTAZUQ'});
app.set('public', path.join(__dirname, '../client/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('', function (req, res) {
  res.render('index.html', {error: null});
})

app.post('', function (req, res) {
  let data = req.body.data;
  client.message(data, {})
  .then((data) => {

    var a=data.entities.message[0].value;
        res.send(a);
  })
  .catch(console.error);
});
fetch('https://app.appointee63.hasura-app.io/query?input=Who teaches IMAD')
           .then(
           function(response) {
           if (response.status !== 200) {
           console.log('Looks like there was a problem. Status Code: ' +
           response.status);
           return;
           }

           // Examine the text in the response
           response.text().then(function(data) {
           console.log(data);
           });
           }
           )
           .catch(function(err) {
           console.log('Fetch Error :-S', err);
           })
app.listen(5000,function(){
    console.log('server started on port 5000...')
});
