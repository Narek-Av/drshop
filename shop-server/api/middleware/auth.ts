import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

const auth = async (req: Request, _: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const isCustomAuth = token.length < 500;

    let decodedData: any;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.body.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.body.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
