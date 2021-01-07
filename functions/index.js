const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const app = express();

admin.initializeApp();
const db = admin.firestore();

app.use(cors({ credentials: true, origin: true }));

app.get("/api/characters", async (req, res) => {
  const charsRef = await db.collection("characters");
  const characters = await charsRef.orderBy("index").get();

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

app.get("/api/categories/", async (req, res) => {
  const catsRef = await db.collection("categories");

  const categories = await catsRef.get();

  if (categories.empty) {
    res.sendStatus(204);
  } else {
    let out = [];
    categories.forEach((doc) => {
      out.push({ id: doc.id, data: doc.data() });
    });
    res.status(200).json(out);
  }
});

app.get("/api/categories/:category/guides", async (req, res) => {
  const guidesRef = await db
    .collection("categories")
    .doc(req.params.category)
    .collection("guides");

  const guides = await guidesRef.get();

  if (guides.empty) {
    res.sendStatus(204);
  } else {
    let out = [];
    guides.forEach((doc) => {
      out.push({ id: doc.id, data: doc.data() });
    });
    res.status(200).json(out);
  }
});

app.get("/api/categories/:character/:fundamental", async (req, res) => {
  const catsRef = await db.collection("categories");

  const categories = await catsRef
    .where("fundamental", "==", req.params.fundamental)
    .where("character", "==", req.params.character)
    .get();

  if (categories.empty) {
    res.sendStatus(204);
  } else {
    let out = [];
    categories.forEach((doc) => {
      out.push({ id: doc.id, data: doc.data() });
    });
    res.status(200).json(out);
  }
});

exports.app = functions.https.onRequest(app);
