import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.DB_URI, {
  family: 4,
  serverSelectionTimeoutMS: 10000,
});

async function test() {
  try {
    console.log("Connecting...");
    await client.connect();
    console.log("✅ Connected successfully");
    await client.close();
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
}

test();
