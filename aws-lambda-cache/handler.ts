import { APIGatewayEvent, ProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

// singleton design pattern on DynamoDB.DocumentClient() instance
const dynamoDb = new DynamoDB.DocumentClient();

const cacheUserInfo: { [key: string]: any } = {};

/**
 * Here is an example of a lambda function that is responsible for handling dynamodb requests.
 * Whenever a request comes it tries to find the user in the cache. If the user is not found in the cache,
 * it will call the dynamodb to get the user and then put it in the cache and finally return the results as response.
 */

export const lambdaCacheHandler = async (event: APIGatewayEvent): Promise<ProxyResult> => {
  const dummyUserId = 'dummy-user-id';

  // Check if user is cached in memory
  if (cacheUserInfo[dummyUserId]) {
    return {
      statusCode: 200,
      body: JSON.stringify(cacheUserInfo[dummyUserId]),
    };
  }

  const params = {
    TableName: 'dummy-users-table',
    Key: {
      id: dummyUserId,
    },
  };
  const result = await dynamoDb.get(params).promise();

  // Cache the result until the lambda container terminates
  cacheUserInfo[dummyUserId] = result.Item;

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
