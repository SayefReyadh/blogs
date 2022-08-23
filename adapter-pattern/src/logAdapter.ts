// import log4js from "log4js";

// const log4jsLogger = log4js.getLogger();
// log4jsLogger.level = "debug";
export class Logger {
	public static debug(message: string) {
		// log4jsLogger.debug(message);
		console.debug(message);
	}
	public static info(message: string) {
		// log4jsLogger.info(message);
		console.info(message);
	}
	public static warn(message: string) {
		// log4jsLogger.warn(message);
		console.warn(message);
	}
	public static error(message: string) {
		// log4jsLogger.error(message);
		console.error(message);
	}
}
