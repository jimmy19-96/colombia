import User from "../models/User.js";

export const administrator = async (req, res, next) => {
  const email = req.user.email;
  const userFound = await User.findOne({ email });
  const emailFound = userFound.email;
  
  if (emailFound === "jaao@gmail.com") {
    return next(); 
  }
  
  req.flash("error_msg", "Not Authorized.");
  res.redirect("/places");
};
