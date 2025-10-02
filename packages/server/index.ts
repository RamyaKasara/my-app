import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
//reads as stores all the vars in the .env file as environment variables in our application

const app = express();

const port = process.env.PORT || 3000;

// define a route handler for the default home page path "/" which is the root of our web server
// and pass a function that will be executed when someone makes a request at this endpoint
// the function takes two arguments : a request object and a response object
// for now we will send a hello world message to the client
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

//to start the webserver, takes a port and a callback function that will be executed once the server is up and running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
