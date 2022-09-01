import log4js from "log4js";

// const logger = log4js.getLogger();
// logger.level = "debug";

import pino from "pino";
import pretty from "pino-pretty";
// const logger = pino({ level: "debug" });

interface ILogger {
	debug(message: string): void;
	info(message: string): void;
	warn(message: string): void;
	error(message: string): void;
}

export class LogAdapter implements ILogger {
	private logger: pino.Logger;

	constructor() {
		const stream = pretty({
			colorize: true,
			minimumLevel: "debug",
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
