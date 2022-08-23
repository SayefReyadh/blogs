import log4js from "log4js";

const log4jsLogger = log4js.getLogger();
log4jsLogger.level = "debug";

interface ILogger {
	debug(message: string): void;
	info(message: string): void;
	warn(message: string): void;
	error(message: string): void;
}

export class Logger implements ILogger {
	public debug(message: string): void {
		log4jsLogger.debug(message);
	}
	info(message: string): void {
		log4jsLogger.info(message);
	}
	warn(message: string): void {
		log4jsLogger.warn(message);
	}
	error(message: string): void {
		log4jsLogger.error(message);
	}
}
