const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const getUser = await prisma.user.findMany(); // Fetch users
    return res.status(200).json(getUser); // Return users in JSON format
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" }); // Error handling
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
