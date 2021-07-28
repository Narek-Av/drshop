import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ messag: "User does't exits." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "superstrong",
      { expiresIn: "2h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, confirmPassword, name } = req.body;

  try {
    const exitstingUser = await User.findOne({ email });
    if (exitstingUser) {
      return res.status(400).json({ message: "User doesn't exist." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password don't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, name });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "superstron",
      { expiresIn: "2h" }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
