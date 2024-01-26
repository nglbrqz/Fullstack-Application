var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors=require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://nlswadmin01:NLSWdb1977@cluster0.o3qtadl.mongodb.net/?retryWrites=true&w=majority"

var DATABASENAME ="nlswdb";
var database;

// const PORT = process.env.PORT || 5176;

/* app.listen old version
app.listen(5038,()=>{
    console.log(`Server is running on port ${PORT}`);
})
*/


app.listen(5173, () => {
    Mongoclient.connect(CONNECTION_STRING,(error,client) => {
        if (error) {
            console.error("Mongo DB Connection Error:", error);
            return;
        }

        database = client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful")
    })
})

/*
app.get('/api/nlswdb/GetCredentials', (request, response) => {
    database.collection("nlswdb-login").find({}).toArray((error, result) => {
        if (error) {
            console.error('Error fetching credentials:', error);
            response.status(500).send('Internal Server Error');
            return;
        }
        response.send(Array.isArray(result) ? result : []);
    });
});
*/

// original code 1 out of 5
app.get('/api/nlswdb/GetCredentials',(request,response)=>{
    database.collection("nlswdb-login").find({}).toArray((error,result)=>{
        response.send(result);
    });
})

