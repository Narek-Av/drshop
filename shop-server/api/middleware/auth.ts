import { Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const isCustomAuth = token.length < 500;

    let decodedData: any;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "superstrong");

      console.log(`decodedData?.id`, decodedData?.id);
      req.body.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      console.log(`decodedData?.sub`, decodedData?.sub);

      req.body.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
