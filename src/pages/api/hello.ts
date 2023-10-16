import { NextApiResponse } from "next";

export default function handler(res: NextApiResponse) {
  res.status(200).json({ text: "Hello, world!" });
}
