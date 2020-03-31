const express =require("express");
const app = express();
const port = 3000;
const cors = require("cors");

searchData ="empty";

app.use(cors());
app.use(express.static("public"));

// Needs to search for and return data posted from client
app.post("/search", (req, res) => res.send(searchData)); 






app.listen(port, () => console.log(`Example app listening on port ${port}!`));