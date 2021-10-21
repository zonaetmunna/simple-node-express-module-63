/* const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
     res.send("hi all person");
})

const users = [
     {
          id: "0", name: "rabus", gmail: "rabus@gmail.com", phone: "0132323232",
     },
     {
          id: "1", name: "fabus", gmail: "fabus@gmail.com", phone: "013232323232",
     },
     {
          id: "2", name: "kabus", gmail: "kabus@gmail.com", phone: "01323232322",
     }
]

app.get('/users', (req, res) => {
     res.send(users);
})

app.get('/users/:id', (req, res) => {
     const id = req.params.id;
     const user = users[id];
     res.send(user)

})

app.listen(port, () => {
     console.log('listing port ', port)
}) */

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

const port = 3000;

app.use(cors());
// get
app.get('/', (req, res) => {
     res.send('hi nodejs');
})
// post
app.post('/users', (req, res) => {
     const newUser = req.body;
     newUser.id = users.length;
     users.push(newUser);
     console.log('hitting post', req.body);
     res.json(newUser);

})

// data
const users = [
     { id: "0", name: "munna", gmail: "munna@gmil.com", phone: "02323232" },
     { id: "1", name: "sakin", gmail: "munnaaaa@gmil.com", phone: "23" },
     { id: "2", name: "munnaaaaaa", gmail: "munnaaa@gmil.com", phone: "023232323232" }
]
// users
app.get('/users', (req, res) => {
     res.send(users)
})
// user
app.get('/users/:id', (req, res) => {
     const id = req.params.id;
     const user = users[id];
     res.send(user)
})

// search query
app.get('/users', (req, res) => {
     const search = req.query.search;
     if (search) {
          const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
          res.send(searchResult);

     }
     else {
          res.send(users)
     }
})

app.listen(port, () => {
     console.log('listing in port', port);
})