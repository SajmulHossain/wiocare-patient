import jwt, { JsonWebTokenError } from "jsonwebtoken";

export const verifyToken = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      console.error("Invalid access token:", error.message);
    } else {
      console.error("Error verifying access token:", error);
    }
  }
};
