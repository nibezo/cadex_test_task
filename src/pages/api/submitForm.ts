import type { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  name: string;
  email: string;
  text: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { error: string }>
) {
  if (req.method === "POST") {
    const { name, email, text } = req.body as FormData;
    console.log("Form submitted:", { name, email, text });
    res.status(200).json({ message: `Thank you for your interest, ${name}!` });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
