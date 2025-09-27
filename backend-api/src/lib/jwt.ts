import jwt from "jsonwebtoken";

export function generateToken(sub: string) {
  const accessToken = jwt.sign(
    { sub },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' });

  return accessToken;
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded;
  } catch (error) {
    return null;
  }
}