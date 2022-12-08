import pkg from "mongoose";
const { Schema, model } = pkg; 

const placeSchema = new Schema(
  {
    namePlace: {
      type: String,
      required: true,
    },
    firstCar: {
      type: String,
      required: true,
    },
    secondCar: {
      type: String,
      required: true,
    },
    priceFirstCar: {
      type: Number,
      required: true,
    },
    priceSecondCar: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Place", placeSchema);
