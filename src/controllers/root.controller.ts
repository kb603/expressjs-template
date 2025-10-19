import { Request, Response } from "express";

export const rootController = (req: Request, res: Response) => {
  res.json({
    message: "System API",
    version: "1.0.0",
    documentation: "/docs",
    health: "/health",
  });
};
