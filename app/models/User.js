const mongoose = require('mongoose');
/*const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
*/
const Schema = mongoose.Schema;

const User = new Schema({
    id:  {type: String},
    name: {type: String},
   // slug: { type: String, slug: "title", unique: true }
},
{
    timestamps: true,
});

module.exports = mongoose.model('User', User);
