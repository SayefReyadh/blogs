import { Handler } from "aws-lambda";
import log4js from "log4js";

const log4jsLogger = log4js.getLogger();
log4jsLogger.level = "debug";

export const hello: Handler = (event: any) => {
	log4jsLogger.debug("Some debug messages");
	log4jsLogger.info("Some info messages");
	log4jsLogger.warn("Some warning messages");
	log4jsLogger.error("Some error messages");

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: "Hello World",
		}),
	};

	return new Promise((resolve) => {
		resolve(response);
	});
};
