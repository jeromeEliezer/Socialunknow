const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.9br5u.mongodb.net/mernProject"
        // "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.9br5u.mongodb.net/mernProject",
    
    )
    .then(()=> console.log('Connected to MongoDb'))
    .catch((err) => console.log("failed connect to MongoDB", err));
