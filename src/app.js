const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.set("Cache-Control", "no-store");
    res.send("Hello, World !");
});

// optional 404 handler
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});