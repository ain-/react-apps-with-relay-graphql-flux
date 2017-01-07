import express from 'express';

import {MongoClient} from 'mongodb';

let app = express();

app.get('/', (req, res) => res.send('hello express!'));

app.listen(3000);

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
    if (err) throw err;

    database.collection("links").find({}).toArray((err, links) => {
        if (err) throw err;

        console.log(links);            
    });
});