import pino from "pino";
import pretty from "pino-pretty";

interface ILogger {
	debug(message: string): void;
	info(message: string): void;
	warn(message: string): void;
	error(message: string): void;
}

export class LogAdapter implements ILogger {
	private logger: pino.Logger;

	constructor() {
		// Making configurations for pino logger
		// to behave like log4js logger
		const stream = pretty({
			colorize: true,
			minimumLevel: "debug",
			translateTime: "UTC:yyyy-mm-dd HH:MM:ss.l",
		});

		this.logger = pino({ level: "debug" }, stream);
	}

	debug(message: string): void {
		this.logger.debug(message);
	}

	info(message: string): void {
		this.logger.info(message);
	}

	warn(message: string): void {
		this.logger.warn(message);
	}

	error(message: string): void {
		this.logger.error(message);
	}
}
