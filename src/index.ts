import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import { config } from "./config/app.config";
import ConnectDB from "./database/database";
import logger from "./utils/logger";
import { errorHandler } from "./middleware/errorHanddler";
import { rootController } from "./controllers/root.controller";
import { healthController } from "./controllers/health.controller";
import { docsController } from "./controllers/docs.controller";

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

// Root Endpoint
app.get("/", rootController);

// Health check
app.get("/health", healthController);

// API Documentation Endpoint
app.get("/docs", docsController);

//Example Routes
// app.use(`${BASE_PATH}/auth`, authRoutes);

app.use(errorHandler);

app.listen(config.PORT, async () => {
  logger.info(
    `Server is listening on http://localhost:${config.PORT} in ${config.NODE_ENV}`
  );
  // await ConnectDB();
});
