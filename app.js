const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

const port = process.env.PORT || 8080;

const homeRouter = require('./routes/home.js');
app.use('/', homeRouter);

const aboutRouter = require('./routes/about.js');
app.use('/about', aboutRouter);

const blogRouter = require('./routes/blog.js');
app.use('/blog', blogRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.render('404', { title: 'jnsl.tk | 404' });
})

app.listen(port, function() {
    console.log('Server is running on port ' + port);
});

