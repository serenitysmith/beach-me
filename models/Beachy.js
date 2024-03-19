
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beachySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  activities: [{ type: String, required: true }],
  amenities: [{ type: String, required: true }],
});

const Beachy = mongoose.model("Beachy", beachySchema);

module.exports = Beachy;
