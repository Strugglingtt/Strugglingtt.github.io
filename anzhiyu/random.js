var posts=["2025/04/18/Learn-Markdown/","2025/04/19/Prompt/","2025/04/18/hello-world/","2025/04/19/project/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };