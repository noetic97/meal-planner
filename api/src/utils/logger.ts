import winston from "winston";

const loggerLevel = process.env.LOGGER_LEVEL || "info";

const logger = winston.createLogger({
  level: loggerLevel,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.timestamp} ${info.level}: ${info.message}` +
        (info.splat !== undefined ? `${info.splat}` : " ")
    )
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
