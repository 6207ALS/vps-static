const express = require("express");
const app = express();

const PORT = 3000

app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
	res.render("index")
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
})