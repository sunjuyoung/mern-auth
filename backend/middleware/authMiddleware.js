import jwt from "jsonwebtoken";
import asynceHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asynceHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //generateToken userId로 생성했기때문에, password 정보는 뺸다
      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized , no token");
  }
});

export { protect };
