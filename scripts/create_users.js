const db_client = require("./connect_db");
const { adminsData, usersData } = require("./Data");

const startTime = performance.now(); // Record the start time

db_client
  .connect()
  .then((result) => {
    console.log("db is connected");

    // Admin Database
    const adminsCollection = db_client
      .db("test-user-management-db")
      .collection("admins");

    adminsCollection
      .insertMany(adminsData)
      .then((result) => {
        console.log("Admins created successfully!");

        // User Database
        const usersCollection = db_client
          .db("test-user-management-db")
          .collection("users");

        usersCollection
          .insertMany(usersData)
          .then((result) => {
            db_client.close();
            console.log("Users created successfully!");
          })
          .catch((err) => {
            console.log("Error:", err);
          });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  })
  .catch((err) => {
    console.log("Error:", err);
    const endTime = performance.now(); // Record the end time

    const executionTimeInSeconds = (endTime - startTime) / 1000;

    console.log(
      `Error: ${err.message} (Execution Time: ${executionTimeInSeconds.toFixed(
        2
      )} seconds)`
    );
  });
