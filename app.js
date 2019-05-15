const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
res.render('home.ejs');})

app.get('/posts', (req,res) =>{
var posts = [
{title:'Aman', Marvel:'THOR'},
{title:'Vatan', Marvel:'Iron Man'}];
res.render('posts.ejs',{posts:posts})})


app.get('/aman/:name', (req,res) =>{
var name = req.params.name;
res.render('home.ejs',{nameVar:name})})

	

app.get("*", (req,res) => res.send('Cannot found Page'))

app.listen(port, () => console.log('Server is started'))
