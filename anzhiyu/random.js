var posts=["2025/08/20/hello-world/","2025/09/04/OnePlus13ROOT/","2025/09/04/在Vscode中写markdown文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };