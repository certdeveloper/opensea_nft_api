import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";


const app: Express = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port || 80, () => {
  return console.log("Server :: running" + port)
});