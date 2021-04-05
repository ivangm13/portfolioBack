const mongoose = require('mongoose');

const urlMongo = process.env.MONGODB_URI;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false
}

mongoose.connect(urlMongo, config);
