const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    product_satisfication_level: {
        type: String,
        //required: true
    },

    service_satisfication_level: {
        type: String,
        //required: true
    },

    feedback: {
        type: String,
        //required: true
    }

}); //can add more as needed

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;