const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SNapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

if (1 === 1)

module.exports = mongoose.connection;