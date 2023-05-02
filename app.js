const express = require("express");
const app = express();

app.use(express.static('public'));

// HOME
app.get('/home', (request, response, next)=> {
    console.log(request);
    response.sendFile(__dirname + '/views/home.html');
});

// WORKS
app.get('/works', (request, response, next)=>{
    response.sendFile(__dirname + '/views/works.html');
});

// ABOUT
app.get('/about', (request, response, next)=>{
    response.sendFile(__dirname + '/views/about.html');
});

// GALLERY
app.get('/gallery', (request, response, next)=>{
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3001, () => {
    console.log('My first app listening on port 3000! ', __dirname)
});