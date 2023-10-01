# jnsl.tk

A simple personal website.

## But don't you already have one?

Yes, I do, it's over at [janoslitkei.com](https://janoslitkei.com/). It's built 
using Svelte and Tailwind, and it's deployed on vercel. 

This one is different though. I kind of got inspired by sites like 
[motherfuckingwebsite.com](https://motherfuckingwebsite.com/) and 
[perfectmotherfuckingwebsite.com](https://perfectmotherfuckingwebsite.com/).

You see, while the website I built looks kind of cool and pretty, it is quite 
large in size and slow to load. I hate to admit it, but it's pretty much what
the sites above are made to warn against. 

So I want to build something different. Something simpler. 

## So what should this website be?

I want this new website to do the following:

- Be lightweight and load fast
- Be responsive and work on all sorts of devices
- Be accessible
- Be simple, and get my point across
- Have dark mode
- Look somewhat modern and sleek and minimal, but at the same time it shouldn't be too hard to imagine it came straight from the early 2000's
- Use a decent font, and some sensible typography

## What are you using to build it?

Good question. The simplest and probably most fitting option would be to just have 
an index.html and a styles.css. Essentially a simple static web-page. However,
I want to include a blog, where I can post some things related to coding, linux, 
and things like that.

For the blog, I just want to keep it simple. I will have every blog post as a 
markdown file, and the website should convert them to html and serve them. Simple.

But doing this requires some kind of backend, so my site cannot be as simple as 
a few html and css files. 

## Node, express and pug

So this is what I've come up with.

This seems to be a common way to make the kind of simple blog I want, so I 
might as well use it for all of the website. 

