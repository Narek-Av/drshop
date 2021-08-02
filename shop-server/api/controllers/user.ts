import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User does't exits." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        username: existingUser.username,
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, confirmPassword, username } = req.body;

  if (!username || typeof username !== "string") {
    return res.status(404).json({ message: "Invalid username" });
  }

  // Email validation regexp
  if (
    !/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/.test(
      String(email)
    )
  ) {
    return res.status(404).json({ message: "Email is not valid." });
  }

  if (!password || typeof password !== "string") {
    return res.status(404).json({ message: "Invalid password" });
  }

  if (password.length < 6) {
    return res.json({
      status: "error",
      error: "Password to small. Should be lateset 6 characters",
    });
  }

  try {
    const exitstingUser = await User.findOne({ email });
    if (exitstingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Password don't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    const token = jwt.sign(
      { email: user.email, username: user.username, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const user = jwt.decode(JSON.parse(token));

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
