import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";

const port = 9999;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/sign-in", (request, response) => {
  const { email, password } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({ success: false, error: error });
    }
    let savedData = data ? JSON.parse(data) : [];

    const registeredUser = savedData.filter(
      (user) => user.email === email && user.password === password
    );

    if (registeredUser.length > 0) {
      response.json({ success: true, user: registeredUser[0] });
    } else {
      response.json({ success: false });
    }
  });
});
app.post("/sign-up", (request, response) => {
  const { name, email, password } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    console.log(data);

    const newUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password,
    };
    savedData.push(newUser);

    fs.writeFile("./data/user.json", JSON.stringify(savedData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          user: newUser,
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server ajillaj ehlelee ++ http://localhost:${port}`);
});
