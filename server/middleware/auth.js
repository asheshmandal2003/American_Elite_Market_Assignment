import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) return res.status(403).json({ message: "Access Denied!" });
    if (token.startsWith("Bearer ")) token = token.split(" ")[1];
    token && jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
