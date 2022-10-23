module.exports ={
  routes: [
      {
          method: 'GET',
          path: '/posts/?populate=*&count',
          handler: 'post.count',
      },
  ]
}
