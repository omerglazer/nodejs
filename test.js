var func = require('./app.js');

db.auth.getAuth(db.firebase)
  .getUserByEmail("glazer.omer1@gmail.com")
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfull test');
  })
  .catch((error) => {
    console.log('Failed test');
  });