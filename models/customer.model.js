let mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://internick14:Mibruno10@cluster0-2wmrb.mongodb.net/test?retryWrites=true"
);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);
