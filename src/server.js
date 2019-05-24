import express from 'express';
import bodyParser from 'body-parser';
import graphqlExpress from 'express-graphql';

import schema from './schemata/book.js';

import jwt from 'jsonwebtoken';
import authentication from './utils/auth.js';

import DB from './utils/database.js';
DB.connect();

//
const PORT = 8080;

// Init Express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/hello', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    const { user_id, password } = req.body;

    if( user_id === "user" && password === "password" ){
        const token = jwt.sign({ user_id, password }, "secret", { expiresIn: "1h" });
        res.status(200).json({ token });
    }else{
        res.status(401).json({ status: 401,  message: "Login Error" });
    }
});

authentication(app);

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, graphiql: true })
);

app.listen(PORT, () => {
    console.log(`Started on port${PORT}`);
});
