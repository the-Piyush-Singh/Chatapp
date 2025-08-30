import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // Generate JWT token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set httpOnly cookie
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,                    // prevent XSS
    sameSite: "strict",                // CSRF protection
    secure: process.env.NODE_ENV === "production", // only over HTTPS in prod
    path: "/",                         // cookie available for all routes
  });

  return token;
};
