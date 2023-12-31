import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  // Create token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
    
  });

  // Set JWT as HTTP-only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development" ? true : false,
    sameSite: "strict", // prevents attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
