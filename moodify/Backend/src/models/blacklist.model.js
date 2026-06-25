const mongoose = require("mongoose")

const blacklistSchema = new mongoose.Schema({
    token : {
        type : String,
        require : [true, "Token is required for Blacklisting"]
    }
},
{
    timestamps : true
})

const blacklistModel = mongoose.model("blacklist",blacklistSchema)

module.exports = blacklistModel