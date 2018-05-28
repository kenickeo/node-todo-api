var mongoose = require('mongoose');

var User = mongoose.model('User', {

Email: {
   type: String,
   required: true,
   trim: true,
   minlength: 1,
    
}

});

module.exports = {

User: User

};