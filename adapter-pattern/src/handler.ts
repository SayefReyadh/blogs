import { Handler } from "aws-lambda";

import { Logger } from "./logAdapter";

const logger = new Logger();

export const hello: Handler = (event: any) => {
	logger.debug("Some debug messages");
	logger.info("Some info messages");
	logger.warn("Some warning messages");
	logger.error("Some error messages");

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
