import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserSchema from "../models/user.js";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserSchema.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(404).json({ mesage: "Invalid credencial" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "30d",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserSchema.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exist" });

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await UserSchema.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.emial, id: result._id }, secret, {
      expiresIn: "30d",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
