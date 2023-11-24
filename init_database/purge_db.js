const db_client = require("./connect_db");

db_client
  .connect()
  .then((result) => {
    db_client
      .db("test-user-management-db")
      .dropDatabase()
      .then((result) => {
        db_client.close();
        console.log("Database is dropped successfully.");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  })
  .catch((err) => {
    console.log("Error:", err);
  });
