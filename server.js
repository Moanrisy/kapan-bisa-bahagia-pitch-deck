import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, "dist")));

// Handle all routes by serving the main index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
