const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

const port = process.env.PORT || 3000;

const homeRouter = require('./routes/home.js');
app.use('/', homeRouter);

const blogRouter = require('./routes/blog.js');
app.use('/blog', blogRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('Server is running on port ' + port);
});

