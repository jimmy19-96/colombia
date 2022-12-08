import User from "../models/User.js";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "jaao@gmail.com" });

  if (userFound) return;

  const newUser = new User({
    username: "admin",
    email: "jaao@gmail.com",
  });

  newUser.password = await newUser.encryptPassword("adminpassword");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};
