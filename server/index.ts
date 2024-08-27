import { DefaultAzureCredential } from "@azure/identity";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

const credential = new DefaultAzureCredential();
const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
  authentication: {
    type: "azure-active-directory-default"
  }
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/test", async (_, res) => {
  try {
    const result = await test();
    res.json(result);
  } catch (error) {
    console.error("Failed to fetch test:", error);
    res.status(500).send("Failed to fetch test");
  }
});

async function test() {
  return {
    hello: "world",
  };
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
