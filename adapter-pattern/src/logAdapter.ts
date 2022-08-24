import log4js from "log4js";

// const logger = log4js.getLogger();
// logger.level = "debug";

import pino from "pino";
const logger = pino({ level: "debug" });

interface ILogger {
	debug(message: string): void;
	info(message: string): void;
	warn(message: string): void;
	error(message: string): void;
}

export class LogAdapter implements ILogger {
	public debug(message: string): void {
		logger.debug(message);
	}

	public info(message: string): void {
		logger.info(message);
	}

	public warn(message: string): void {
		logger.warn(message);
	}

	public error(message: string): void {
		logger.error(message);
	}
}
