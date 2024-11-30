const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my Express App!</h1><p>This is a simple Express app that you can view in your browser.</p>");
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
