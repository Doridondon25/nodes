// console.log("hello, Node.js!");
// const fs = require('fs');
// const path = require('path');
// const http = require('http');
// const { users, getUser } = require('./users');

// // http.createServer((req, res) => {
// //     res.writeHead(200, {'Content-Type': 'text/plain'});
// //     res.end('Hello, world');
// // }).listen(3000, () => {
// //     console.log('Server running on port 3000');
// // });

// console.log(path.join(__dirname, 'hello.txt'));

// function createFile() {
//     fs.writeFileSync('hello.txt', "my name is dori");
// }

// createFile();

// function readFile() {
//     const data = fs.readFileSync('hello.txt', 'utf8');
//     console.log(data);
// }

// readFile();

// console.log(users[0].name);                                                                                                                                                                                                                                                                                     mn       
// console.log(getUser(1).name);

const express = require('express')
const app = express()
app.use(express.json());


const users = [
  { id: 1, name: 'dori donitza'},
  { id: 2, name: 'itay lol'},
  { id: 3, name: 'eitan levi'},
];

app.get('/users', (req, res) => {
  return res.json(users);
});

app.post('/add-user', (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(400).json({ error: 'name is required' });
  }
const existingUser = users.find(user => user.name === name);
  if (existingUser) {
    return res.status(400).json({ error: 'name already exists' });
  }
  //if (users.find(user => user.name === name)) {
    //return res.status(400).json({ error: 'name already exists' });
  //}

  const newuser = { id: users.length + 1, name };
  users.push(newuser);
  return res.status(201).json(users);
});

app.listen(3000, () => {
    console.log('server is runnuing on http://localhost:3000');
});