import { APIGatewayEvent, ProxyResult } from 'aws-lambda';
import SQS from 'aws-sdk/clients/sqs';
import { v1 } from 'uuid';

export const handlePublish = async (event: APIGatewayEvent): Promise<ProxyResult> => {
  const url = process.env.QUEUE_URL;
  console.info(`Publishing to queue: ${url}`);
  if (!url) {
    return {
      statusCode: 404,
      body: JSON.stringify('Queue url not found'),
    };
  }

  const id = v1();
  const sqs = new SQS();

  try {
    const result = await sqs
      .sendMessage({
        QueueUrl: url,
        MessageBody: JSON.stringify({
          id,
          body: event.body,
        }),
        MessageDeduplicationId: id,
        MessageGroupId: `transfer-${id}`,
        MessageAttributes: {
          id: {
            DataType: 'String',
            StringValue: id,
          },
        },
      })
      .promise();

    console.info(`SQS publish result: ${JSON.stringify(result)}`);
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error publishing message to SQS' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify('Published message to SQS queue'),
  };
};
