import jwt from "jsonwebtoken";

export function checkAuth(req, res, next) {
  // Check both cookie and Authorization header
  const token =
    req.cookies.token || req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "invalid token",
      });
    }

    req.userId = decoded.userid;
    next();
  } catch (error) {
    console.log("error in verification token", error);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
}
