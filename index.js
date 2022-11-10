const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db');
const route = require('./routes');

//Connect to DB
db.connect();

//Router init
route(app);
    
app.get('/', (req, res) => {
    res.send(
      `
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
    <link rel="stylesheet" href="ex2.css">
</head>
<body>
    <table cellpadding="10" cellspacing="0">
        <tbody><tr valign="TOP">
        
        <td valign="TOP" width="151">
        
        <img class="intro" src="https://icdn.caughtoffside.com/wp-content/uploads/2018/02/imageedit_1_5515563540.jpg"><p>
        
        </p></td>
        
        <td valign="TOP">
        
        <div><h2>Trịnh Anh Tú<br>
        Class: CTTT2019.2<br>
        Student ID: 19522459
        </h2>
        
        <p>
        <strong>I love hanging out with my friends, and playing soccer </strong>
        </p>
        
        <p><strong>I want to be an Business Analyst
            <a href="https://www.uit.edu.vn/">UIT, </a>
        </strong> </p>
        
        <p>
        
        Student <a href="https://www.uit.edu.vn/">University of Information Technology</a>, 2019.</p><p>
        
        </p><dd>
        <b>
            <a href="https://github.com/salaghati">Github</a><br> 
            <a href="https://www.facebook.com/tu.trinh2808/">Facebook</a></div>
        
        </b>
        
        
        </dd></td>
        </tr>
        </tbody></table>
        <hr>
            <h2 class="learn">Subject and Learning</h2>
            <ul>
                <li >Web application and development</li>
                <li >MSIS207.N12.CTTT</li>
                <li >IEM5723.N12.CTTT</li>
            </ul>
        
        <hr>
        
        <hr>
            <h2 class="learn">Academic level</h2>
            <ul>
                <li>Study progress</li>
                <li>2019-2023 Student at UIT</li>
            </ul>
        </hr>
        
        <hr>
            <h2>Skill</h2>
            <ul>
                <li class="fa fa-star checked">HTML/CSS/JS</li><br>
                <li class="fa fa-star checked">ReactJS</li><br>
                <li class="fa fa-star checked">Nodejs/Express</li><br>
                <li class="fa fa-star checked"> Communication Skills, Teamwork skills</li><br>
                <li class="fa fa-star checked">Word,Excel,PowerPoint</li><br>
                <li class="fa fa-star checked">C++ </li>
            </ul>
        </hr>
        
        </script>
</body>
    `
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});