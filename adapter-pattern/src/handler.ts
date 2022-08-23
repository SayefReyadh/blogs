import { Handler } from "aws-lambda";

import { Logger } from "./logAdapter";

export const hello: Handler = (event: any) => {
	Logger.debug("Some debug messages");
	Logger.info("Some info messages");
	Logger.warn("Some warning messages");
	Logger.error("Some error messages");

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
