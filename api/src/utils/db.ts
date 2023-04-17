import { DataSource } from "typeorm";
import logger from "./logger";
// import { books } from "../models";

export default async function initConnection() {
  const connectionString =
    process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017";
  logger.debug(`connectionString: ${connectionString}`);

  const appDataSource = new DataSource({
    type: "mongodb",
    url: connectionString,
    database: process.env.MONGO_DB_NAME || "voc",
    useUnifiedTopology: true,
    synchronize: true,
    entities: [],
    wtimeout: 300000, // 5 minutes
    maxQueryExecutionTime: 300000, // 5 minutes
    useNewUrlParser: true,
    keepAlive: 1,
  });

  return appDataSource;
}
