import { MAX_FILE_SIZE_MB } from "./constants";
import { LogAdapter } from "./logAdapter";
import {
	downloadAssetFromUrl,
	getFileSize,
	publishAsset,
	uploadAsset,
} from "./service";

const logger = new LogAdapter();

export const handleAssetPublishService = async (assetUrl: string) => {
	logger.info(`Downloading asset from ${assetUrl}`);

	try {
		const fileName = await downloadAssetFromUrl(assetUrl);
		logger.info(`Asset downloaded to ${fileName}`);

		const fileSize = await getFileSize(fileName);
		logger.debug(`File size of ${fileName} is ${fileSize}`);

		if (fileSize > MAX_FILE_SIZE_MB) {
			logger.warn(`File is greater than ${MAX_FILE_SIZE_MB}MB`);
			logger.warn("Uploading might take longer than expected");
		}

		const response = await uploadAsset(fileName);
		logger.debug(JSON.stringify(response));

		const id = response.id;
		logger.info(`Asset uploaded to ${id}`);

		const success = await publishAsset(id);

		return success;
	} catch (error) {
		logger.error(error.message);
		throw error;
	}
};
