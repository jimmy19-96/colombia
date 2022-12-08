import nodemailer from 'nodemailer';
import { transporter } from "../config/mailer.js";
import Place from "../models/Place.js";
import Subscription from "../models/Subscription.js";

export const createSubscription = async (req, res) => {
  const id = req.params.id;
  
  const place = await Place.findById(id);
  const nameDestination = place.namePlace;

  const subscription = new Subscription({ nameDestination });
  subscription.user = req.user.id;

  await subscription.save();
  req.flash("success_msg", "Subscription Created Successfully");
  res.render("subscriptions/new-subscription");
};

export const finishSubscription = async (req, res) => {
  try {
    const { car, passengers } = req.body;

    const errors = [];
    if (!car) {
      errors.push({ text: "Please Write the vehicle to travel" });
    }
    if (!passengers) {
      errors.push({ text: "Please Write the passengers you travel with" });
    }

    if (errors.length > 0)
      return res.render("subscriptions/new-subscription", {
        errors,
        car,
        passengers,
      });
    
    const emailUser = req.user.email;
    const id = req.user.id;
    const subscriptions = await Subscription.find().lean();
    const subscriptionToFind = subscriptions.filter(s => s.user === id);
    const subscription = subscriptionToFind[0];

    const placeToFind = subscription.nameDestination;
    const place = await Place.findOne({ namePlace: placeToFind });

    let priceToFind;

    (car === "CARRO") ? (priceToFind = place.priceFirstCar) : (priceToFind = place.priceSecondCar);

    const price = passengers * priceToFind;
    const nameUser = req.user.email;

    const subscriptionToFill = await Subscription.findById(subscription._id);
    subscriptionToFill.data.push({nameUser, car, passengers, price});
    await subscriptionToFill.save();

    let info = await transporter.sendMail({
      from: '<jimalaros25@gmail.com>', // sender address
      to: 'jimalaros25@gmail.com', // list of receivers
      subject: "Purchase ✔", // Subject line
      text: "Thank you for your purchase", // plain text body
      html: `
      <h1>Travel From Bogota to ${placeToFind}</h1>
      <p>Passengers: ${passengers}</p>
      <p>Price: ${price}</p>
      `
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    req.flash("success_msg", "Subscription Done Successfully");
    res.redirect("/subscriptions");
  } catch (err) { console.log(err) }
  
};

export const renderSubscriptions = async (req, res) => {
  const subscriptions = await Subscription.find({ user: req.user.id }).lean();
  res.render("subscriptions/all-subscriptions", { subscriptions });
};

export const deleteSubscription = async (req, res) => {
  const {id} = req.params;
  await Subscription.findByIdAndDelete(id);
  req.flash("success_msg", "Subscription deleted successfully");
  res.redirect("/subscriptions");
};
