// import log4js from "log4js";

// const log4jsLogger = log4js.getLogger();
// log4jsLogger.level = "debug";

import pino from "pino";
const pinoLogger = pino({ level: "debug" });

interface ILogger {
	debug(message: string): void;
	info(message: string): void;
	warn(message: string): void;
	error(message: string): void;
}

export class Logger implements ILogger {
	public debug(message: string): void {
		pinoLogger.debug(message);
	}
	info(message: string): void {
		pinoLogger.info(message);
	}
	warn(message: string): void {
		pinoLogger.warn(message);
	}
	error(message: string): void {
		pinoLogger.error(message);
	}
}
