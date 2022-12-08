import pkg from "mongoose";
const { Schema, model } = pkg; 

const subscriptionSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    nameDestination: {
      type: String,
      required: true,
    },
    data: [{
      nameUser: {
        type: String,
        required: true,
      },
      car: {
        type: String,
        required: true,
      },
      passengers: {
        type: Number,
        required: true, 
      },
      price: {
        type: Number,
        required: true,
      },
    }],
  },
  {
    timestamps: true,
  }
);

export default model("Subscription", subscriptionSchema);
