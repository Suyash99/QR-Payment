const mongoose = require("mongoose");

const pilot_schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: false,
    },
    bankAccountDetails: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("",pilot_schema)