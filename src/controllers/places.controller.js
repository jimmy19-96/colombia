import Place from "../models/Place.js";

export const renderPlaceForm = (req, res) => res.render("places/new-place");

export const createNewPlace = async (req, res) => {
  const { namePlace, firstCar, secondCar, priceFirstCar, priceSecondCar, photo } = req.body;
  const errors = [];
  if (!namePlace) {
    errors.push({ text: "Please write the name of the place" });
  }
  if (!firstCar) {
    errors.push({ text: "Please write the transport, van or car" });
  }
  if (!secondCar) {
    errors.push({ text: "Please write the transport, van or car" });
  }
  if (!priceFirstCar) {
    errors.push({ text: "Please write the price" });
  }
  if (!priceSecondCar) {
    errors.push({ text: "Please write the price" });
  }
  if (!photo) {
    errors.push({ text: "Please write the url of the photo" });
  }
  if (errors.length > 0)
    return res.render("places/new-place", {
      errors,
      namePlace,
      firstCar,
      secondCar,
      priceFirstCar,
      priceSecondCar,
      photo,
    });

  const newPlace = new Place({ namePlace, firstCar, secondCar, priceFirstCar, priceSecondCar, photo });
  newPlace.user = req.user.id;
  await newPlace.save();
  req.flash("success_msg", "Place created successfully");
  res.redirect("/places");
};

export const renderPlaces = async (req, res) => {
  const places = await Place.find().lean();
  res.render("places/all-places", { places });
};

export const deletePlace = async (req, res) => {
  const {id} = req.params;
  await Place.findByIdAndDelete(id);
  req.flash("success_msg", "Place deleted successfully");
  res.redirect("/places");
};
