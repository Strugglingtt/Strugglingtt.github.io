var posts=["2025/06/17/Graduation/","2025/04/24/life/","2025/04/18/Learn-Markdown/","2025/04/19/Prompt/","2025/04/19/project/","2025/04/22/test/","2025/04/22/test2/","2025/05/12/life2/","2025/04/21/work/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };