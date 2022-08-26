export const downloadAssetFromUrl = async (assetUrl: string) => {
	console.log(`Downloading asset from ${assetUrl}`);
	return assetUrl;
};

export const getFileSize = async (fileName: string) => {
	console.log(`Getting file size of ${fileName}`);
	return 10;
};

export const uploadAsset = async (fileName: string) => {
	console.log(`Uploading asset to ${fileName}`);
	return {
		id: fileName,
	};
};

export const publishAsset = async (fileName: string) => {
	console.log(`Publishing asset to ${fileName}`);
	return fileName;
};
