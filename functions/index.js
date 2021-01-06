const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const app = express();

admin.initializeApp();
const db = admin.firestore();

app.use(cors({credentials: true, origin: true}));

app.get("/api/characters", async (req, res) => {
  const charsRef = await db.collection("characters");
  const characters = await charsRef.get();

  if (characters.empty) {
    res.sendStatus(204);
  } else {
    let out = [];
    characters.forEach((doc) => {
      out.push({ id: doc.id, data: doc.data() });
    });
    res.status(200).json(out);
  }
});

exports.app = functions.https.onRequest(app);
