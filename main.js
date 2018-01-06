const express = require('express'); //from documentation: express is function
const app     = express();//app is an object
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const videos     = require('./videos');
const comedians  = require('./comedians');
const path       = require('path');

app.use('/videos', videos);
app.use('/comedians', comedians);

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(morgan('tiny'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index', {
    message: 'Hello World!',
    documentTitle: 'Ada quotes!!',
    subTitle: 'Read some of the coolest quotes around.',
    showMore: true,
    quoteAuthors: ['Unknown', 'Yoda', 'CS Lewis', 'Frank Chimero', 'Pablo Picasso', 'Italo Calvino', 'T. S. Eliot', 'Samuel Beckett', 'Hunter S. Thompson'],
  });
});


app.get('*', function(req, res) {
  res.status(404).sendFile('error.html', {root: 'public'});
});



app.listen(3000, ()=>{
    console.log("I am listening");
});