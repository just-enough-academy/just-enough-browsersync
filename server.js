var express = require('express'),
    bodyParser = require('body-parser')
    _ = require('lodash')
;

var api = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', function(request, response){
    console.log('Getting all the things...');

    response.send(request.query);
  })
  .post('/', function(request, response){
    console.log('Posting all the things...');

    response.send(request.body);
  })
;

var server = express()
  .use(express.static('pub'))
  .use('/api', api)
  .listen(process.argv[2] || 8000, function(){
    console.log(server.address());
  });
