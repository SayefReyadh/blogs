import { APIGatewayEvent, ProxyResult } from 'aws-lambda';

export const handleConsume = async (event: APIGatewayEvent): Promise<ProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
};
