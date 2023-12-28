// pages/api/properties.ts
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

// Define a type for the response data
type Data = {
  properties?: any[]; // Define a more specific type based on your property model
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const properties = await prisma.property.findMany();
      res.status(200).json({ properties });
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch properties" });
    }
  }
  // Add more methods for POST, PUT, DELETE as needed
}
