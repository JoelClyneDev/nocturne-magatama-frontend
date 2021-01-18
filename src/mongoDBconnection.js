//MongoDB connection library
const mongoose = require('mongoose');

function runMongooseConnection() {
    console.log('testsdfdf');

    const mongoDBdatabaseIP = 'mongodb://127.0.0.1:27017/mycustomers';

    mongoose
        .connect(mongoDBdatabaseIP, { useNewUrlParser: true })
        .catch(e => {
            console.error('Connection error', e.message)
        })

    const connection = mongoose.connection;


    connection.once("open", function() {
        console.log("Successful Connection");

        return connection;
    });
}




export default runMongooseConnection;