const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:String,
    articleDescription:String,
    // published:Boolean,
},
)

module.exports = mongoose.model('Article',articleSchema);
