const mongoose = require('mongoose');

const urlMongo = process.env.MONGODB_URI;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}

mongoose.connect(urlMongo, config);
