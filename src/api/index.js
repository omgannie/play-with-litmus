import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.use('/login', (req, res) => {
   res.send({
       token: uuid()
   });
});

const port = process.env.PORT || 8080;
app.listen(port);