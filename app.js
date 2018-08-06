/*jshint esversion: 6 */ //this is a fix for linter

// app.js

//require and instantinate express
const app = require('express')() //automatically looks inside the views/ folder for template files

//fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post No 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post No 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Stream',
    body: 'Blog post No 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post No 4'
  },
];

//set the view engine to ejs
app.set('view engine', 'ejs')

//blog home page
app.get('/', (req, res) => {
  //find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id;
  })[0]

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', { //res.render() method is used to render the view we pass it and send the HTML to the client
    author: post.author,
    title: post.title,
    body: post.body
  })
})

})
app.listen(8080)

console.log('listening on port 8080')
