import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/submit", (req, res) => {
  const title = req.body["input1"];
  const content = req.body["input2"];
  res.render("index.ejs", { Title: title , Content: content });
  //   res.render("index.ejs", { Content: content });
});

app.post('/submit', (req, res) => {
    var postTitle = req.body["input1"]
    var postContent = req.body["input2"]
  
    const postObj = {
      "title":postTitle,
      "content":postContent
    }
    
    posts.push(postObj)
    console.log(posts)
    res.render("index.ejs", { Title: posts.title , Content: posts.content });
  })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

