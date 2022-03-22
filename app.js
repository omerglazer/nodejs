const db = require("firebase");
// const auth = require("firebase-admin/auth");

const key = require('./config');

// const express = require("express");
// const cors = require("cors");
// const { sign } = require("crypto");
// const app = express();
// app.use(express.json());
// app.use(cors());

// const firebaseConfig = {
//   apiKey: "AIzaSyBYCBcqAgKUDDxtZ739KjzAVIszYy1UZaU",
//   authDomain: "dbsample-8d538.firebaseapp.com",
//   projectId: "dbsample-8d538",
//   storageBucket: "dbsample-8d538.appspot.com",
//   messagingSenderId: "139088276459",
//   appId: "1:139088276459:web:ae39b449d8ada3b389c7ae",
//   measurementId: "G-GQHZ7SNC3X"
// };

let firebase;
// const firebase = db.initializeApp(key);
if (db.apps.length === 0) {
  firebase = db.initializeApp({
    credential: db.credential.cert(key),
    databaseURL: "dbsample-8d538.firebaseapp.com"
  });
}

const email = "glazer.omer1@gmail.com";
const password = "12345678"; 

const answer = "";

firebase
.signInWithEmailAndPassword(email,password)
.then((userRecord) => {
  // See the UserRecord reference doc for the contents of userRecord.
  console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  answer = "success";
})
.catch((error) => {
  console.log('Error fetching user data:', error);
  answer = "failed";
});

func();

module.exports = {func};

// app.listen(3000, () => console.log("Listening over port 3000"));