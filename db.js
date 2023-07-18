const mongoose = require('mongoose');


const dbUrl = 'mongodb+srv://rkdev:admin@cluster0.cs2dlpr.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
module.exports = () => {
    return mongoose.connect(dbUrl, {dbName : 'learnmonodb'});    
}
