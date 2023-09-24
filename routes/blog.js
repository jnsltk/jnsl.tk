const express = require('express');
const router = express.Router();
const marked = require('marked');
const matter = require('gray-matter');
const fs = require('fs');

router.get('/', function(req, res, next) {
    const posts = fs.readdirSync(`${__dirname}/../posts/`).filter((post) => post.endsWith(".md"));
    const postData = [];
    
    posts.forEach((post) => {
        const markdown = matter.read(`${__dirname}/../posts/${post}`);
        const url = `/blog/${post.slice(0, -3)}`;
        postData.push({ url: url, data: markdown.data });

    });
    console.log(postData);
    res.render('blog', {title: 'jnsl.tk | blog', posts: postData });
});

router.get('/:filename', function(req, res, next) {
    const filename = req.params.filename;
    const markdown = `${__dirname}/../posts/${filename}.md`;
    try {
        const post = matter.read(markdown);
        const content = marked.parse(post.content);
        console.log(post);
        res.render('blogPost', { title: 'jnsl.tk | blog', postTitle: post.data.title, postAuthor: post.data.author, postDate: post.data.date, postContent: content });

    } catch (err) {
        console.log(err);
        res.render('404', { title: 'jnsl.tk | 404' });
    };
});

module.exports = router;

