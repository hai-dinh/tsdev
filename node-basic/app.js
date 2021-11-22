const fetch = require('node-fetch');
const data = require('./database.json');

(async () => {

  const user = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
  const users = await user.json();

  const comment = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
  const comments = await comment.json();

  const post = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const posts = await post.json();

  // 3
  // const userData = users.map(user =>{
  //      const cmt = comments.filter(comment => comment.id === user.id  )
  //      const pt = posts.filter(post => post.id === user.id  )

  //        return { id: user.id, name: user.name, username: user.username, email: user.email, comments: cmt, posts: pt }
  // })

  // console.log(userData);
  // 3

  // 4

  // function users_More_Comment_Than(number){

  // const users = userData.filter(user => user.comments.length > number )
  // console.log(users);
  // }
  // users_More_Comment_Than(3)
  // 4

  //5

  const userData = users.map(user => {
    const cmt = comments.filter(comment => comment.id === user.id)
    const pt = posts.filter(post => post.id === user.id)

    return { id: user.id, name: user.name, username: user.username, email: user.email, comments: cmt.length, posts: pt.length }
  })

  // console.log(userData);
  //5

  // 6

  const numberPostsCount = data.map(function (user, index) {
    return user.posts
  })
  const sortposts = Math.max.apply(Math, numberPostsCount)
  console.log(sortposts);

  // 6



  // 7


  // const numberPostsCount = data.map(user =>{
  //   return user 
  // })
  // const sortposts = numberPostsCount.sort(function(a, b) {
  //   return b.posts-a.posts;
  // });
  // console.log(sortposts);

  // 7
})()
